"use client"

import { useRef } from "react"
import { getImageProps } from "next/image"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Entrance, useExperience } from "./motion"
import { motionTiming } from "@/lib/motion"
const common = {
  alt: "Rose celebration lehenga and light ivory bridal lehenga in a sunlit Pakistani courtyard",
  sizes: "100vw",
}
const { props: desktop } = getImageProps({
  ...common,
  src: "/media/hero-premium-desktop.webp",
  width: 1672,
  height: 941,
  loading: "eager",
  fetchPriority: "high",
})
const { props: mobile } = getImageProps({
  ...common,
  src: "/media/hero-premium-mobile.webp",
  width: 1024,
  height: 1536,
})
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { reduceMotion } = useExperience()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const progress = useSpring(scrollYProgress, motionTiming.scrollSpring)
  const y = useTransform(
    progress,
    (value) => `calc(${value * -100}px * var(--parallax-strength, 1))`
  )
  const textY = useTransform(
    progress,
    (value) => `calc(${value * -45}px * var(--parallax-strength, 1))`
  )
  const scale = useTransform(progress, [0, 1], [1, 1.06])
  return (
    <section className="hero" aria-labelledby="hero-heading" ref={ref}>
      <motion.div
        className="hero-image"
        style={{ y: reduceMotion ? 0 : y, scale: reduceMotion ? 1 : scale }}
      >
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet={mobile.srcSet}
            sizes="100vw"
          />
          <img {...desktop} alt={common.alt} />
        </picture>
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.div style={{ y: reduceMotion ? 0 : textY }}>
          <Entrance delay={0.08}>
            <p className="eyebrow hero-eyebrow">
              <span aria-hidden="true">✳</span> THE MEHR COLLECTIONS / 2026
            </p>
          </Entrance>
          <Entrance delay={0.18}>
            <h1 id="hero-heading">
              For every chapter,
              <br />
              <em>beautifully.</em>
            </h1>
          </Entrance>
          <Entrance delay={0.32}>
            <p className="hero-description">
              Pakistani suits, celebration lehengas,
              <br />
              and light ivory bridal ensembles.
            </p>
          </Entrance>
          <Entrance delay={0.44}>
            <div className="hero-actions">
              <a href="#collections" className="primary-link">
                Explore collections
                <ArrowUpRight size={18} />
              </a>
              <a href="#bridal" className="text-link">
                Discover ivory bridal
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Entrance>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <a href="#categories" className="scroll-cue">
          <ArrowDown size={15} />
          <span>Rooted in tradition. Yours to make.</span>
        </a>
        <span className="hero-caption">EVERYDAY · CELEBRATION · BRIDAL</span>
      </div>
    </section>
  )
}
