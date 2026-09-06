"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/interests", label: "Interests" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // The menu is a full-width panel; close it when the viewport reaches desktop
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const close = () => setIsMenuOpen(false)
    desktop.addEventListener("change", close)
    return () => desktop.removeEventListener("change", close)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2.5" aria-label="Y1220, home">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Y1220</span>
          <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft sm:inline">
            backend
          </span>
        </Link>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-ink transition-colors hover:bg-sage md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {routes.map((route) => {
            const active = pathname === route.href
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-moss-deep" : "text-ink-soft hover:text-ink",
                )}
              >
                {route.label}
                <span
                  className={cn(
                    "absolute inset-x-3 bottom-1 h-[3px] origin-left rounded-full bg-citron transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </nav>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav" className="border-t border-ink/10 bg-paper md:hidden">
          <nav className="container flex flex-col py-2">
            {routes.map((route) => {
              const active = pathname === route.href
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "border-b border-ink/5 py-3.5 text-base font-medium transition-colors last:border-0",
                    active ? "text-moss-deep" : "text-ink-soft",
                  )}
                >
                  <span className={active ? "marker" : undefined}>{route.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
