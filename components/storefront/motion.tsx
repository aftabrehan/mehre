"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import {
  MotionConfig,
  motion,
  useAnimationControls,
  useReducedMotion,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react"
import { Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  initialFilters,
  type CatalogFilters,
  type Category,
  type CollectionId,
} from "@/lib/storefront"
import { motionTiming } from "@/lib/motion"

type Experience = {
  paused: boolean
  reduceMotion: boolean
  filters: CatalogFilters
  setFilters: React.Dispatch<React.SetStateAction<CatalogFilters>>
  toggleMotion: () => void
}
const ExperienceContext = createContext<Experience | null>(null)

export function ExperienceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [paused, setPaused] = useState(false)
  const [filters, setFilters] = useState<CatalogFilters>(initialFilters)
  const reduced = useReducedMotion()
  const reduceMotion = Boolean(reduced) || paused

  // The document also owns anchor scrolling and portaled navigation transitions.
  useEffect(() => {
    document.documentElement.toggleAttribute(
      "data-motion-reduced",
      reduceMotion
    )
    return () => document.documentElement.removeAttribute("data-motion-reduced")
  }, [reduceMotion])

  return (
    <ExperienceContext.Provider
      value={{
        paused,
        reduceMotion,
        filters,
        setFilters,
        toggleMotion: () => setPaused((value) => !value),
      }}
    >
      <MotionConfig
        reducedMotion={paused ? "always" : "user"}
        transition={{ duration: motionTiming.change, ease: motionTiming.ease }}
      >
        <div data-motion-paused={paused || undefined}>{children}</div>
      </MotionConfig>
    </ExperienceContext.Provider>
  )
}

export function useExperience() {
  const context = useContext(ExperienceContext)
  if (!context) throw new Error("ExperienceProvider is required")
  return context
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const shown = useRef(false)
  const controls = useAnimationControls()
  const { reduceMotion } = useExperience()

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const visible = { opacity: 1, y: 0 }
    const bounds = element.getBoundingClientRect()
    // Keep SSR content and deep-link arrivals visible; animate only new arrivals.
    if (
      shown.current ||
      reduceMotion ||
      (bounds.top < window.innerHeight &&
        bounds.bottom > 0 &&
        bounds.left < window.innerWidth &&
        bounds.right > 0)
    ) {
      shown.current = true
      controls.set(visible)
      return
    }
    controls.set({ opacity: 0, y: 30 })
    let active = true
    const observer = new IntersectionObserver(
      (entries) => {
        if (!active || !entries.some((entry) => entry.isIntersecting)) return
        shown.current = true
        observer.disconnect()
        void controls.start(visible, {
          duration: motionTiming.reveal,
          delay: Math.min(delay, 0.3),
          ease: motionTiming.ease,
        })
      },
      { threshold: 0.08 }
    )
    const focus = () => {
      if (!active) return
      shown.current = true
      observer.disconnect()
      controls.stop()
      controls.set(visible)
    }
    observer.observe(element)
    element.addEventListener("focusin", focus)
    return () => {
      active = false
      observer.disconnect()
      controls.stop()
      // Cleanup can run after Motion has unmounted its controls (including
      // Strict Mode's effect replay). Only the mounted effect sets visibility.
      element.removeEventListener("focusin", focus)
    }
  }, [controls, reduceMotion, delay])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export function Parallax({
  children,
  className = "",
  distance = 36,
}: {
  children: React.ReactNode
  className?: string
  distance?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { reduceMotion } = useExperience()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const progress = useSpring(scrollYProgress, motionTiming.scrollSpring)
  const y = useTransform(
    progress,
    (value) =>
      `calc(${(value * 2 - 1) * distance}px * var(--parallax-strength, 1))`
  )
  return (
    <div ref={ref} className={`parallax-frame ${className}`}>
      <motion.div
        className="parallax-inner"
        style={{ y: reduceMotion ? 0 : y, insetBlock: -(distance + 8) }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function CollectionLink({
  children,
  category,
  collection,
  all = false,
  className = "",
}: {
  children: React.ReactNode
  category?: Category
  collection?: CollectionId
  all?: boolean
  className?: string
}) {
  const { setFilters } = useExperience()
  return (
    <a
      href="#collection"
      className={className}
      onClick={() =>
        setFilters(() =>
          all
            ? initialFilters
            : {
                ...initialFilters,
                ...(category ? { category } : {}),
                ...(collection ? { collection } : {}),
              }
        )
      }
    >
      {children}
    </a>
  )
}

export function MotionToggle() {
  const { paused, reduceMotion, toggleMotion } = useExperience()
  const systemReduced = reduceMotion && !paused
  return (
    <Button
      variant="ghost"
      className="motion-toggle"
      aria-pressed={paused}
      disabled={systemReduced}
      onClick={toggleMotion}
    >
      {paused ? <Play size={13} /> : <Pause size={13} />}
      <span>
        {systemReduced
          ? "Reduced motion enabled"
          : paused
            ? "Resume motion"
            : "Pause motion"}
      </span>
    </Button>
  )
}

// Visible HTML first; entrances begin after hydration and respect motion controls.
export function Entrance({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const controls = useAnimationControls()
  const { reduceMotion } = useExperience()
  useEffect(() => {
    if (reduceMotion) {
      controls.set({ opacity: 1, y: 0 })
      return
    }
    controls.set({ opacity: 0, y: 22 })
    void controls.start(
      { opacity: 1, y: 0 },
      {
        duration: motionTiming.entrance,
        delay,
        ease: motionTiming.ease,
      }
    )
    return () => controls.stop()
  }, [controls, delay, reduceMotion])
  return (
    <motion.div
      className={className}
      initial={false}
      animate={controls}
      onFocusCapture={() => {
        controls.stop()
        controls.set({ opacity: 1, y: 0 })
      }}
    >
      {children}
    </motion.div>
  )
}
