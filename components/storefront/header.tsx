"use client"

import { useEffect, useState } from "react"
import { Dialog } from "@base-ui/react/dialog"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { CollectionLink, Entrance } from "./motion"

const navigation = [
  { name: "Categories", href: "#categories" },
  { name: "Collections", href: "#collections" },
  { name: "Ivory Bridal", href: "#bridal" },
  { name: "Our Story", href: "#story" },
]
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  return (
    <>
      <div className="announcement" id="home">
        For the everyday. For the unforgettable.
        <span>Discover the MEHR collections</span>
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#home" aria-label="MEHR home">
          MEHR<span className="wordmark-dot">·</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <CollectionLink all className="header-explore">
          Explore all pieces
          <ArrowUpRight size={16} />
        </CollectionLink>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="menu-trigger" aria-label="Open navigation">
            <Menu size={23} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="menu-backdrop" />
            <Dialog.Popup className="mobile-menu">
              <div className="menu-top">
                <Dialog.Title className="wordmark">
                  MEHR<span className="wordmark-dot">·</span>
                </Dialog.Title>
                <Dialog.Close
                  className="icon-button"
                  aria-label="Close navigation"
                >
                  <X size={24} />
                </Dialog.Close>
              </div>
              <Dialog.Description className="eyebrow">
                FOR EVERY CHAPTER
              </Dialog.Description>
              <nav aria-label="Mobile navigation">
                {navigation.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <Entrance
                      className="menu-link-content"
                      delay={0.1 + i * 0.07}
                    >
                      <span>0{i + 1}</span>
                      {item.name}
                      <ArrowUpRight size={22} />
                    </Entrance>
                  </a>
                ))}
              </nav>
              <p className="menu-note">Rooted in tradition. Yours to make.</p>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </header>
    </>
  )
}
