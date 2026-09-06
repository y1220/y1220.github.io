import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Karla, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Y1220 — Backend developer",
  description:
    "Backend developer building tools around mental health, hackathon projects and web platforms. Open to long-term collaborations.",
  icons: {
    icon: "/favicon_cat.ico",
    shortcut: "/favicon_cat.ico",
    apple: "/favicon_cat.ico",
  },
  keywords: [
    "Y1220",
    "portfolio",
    "backend developer",
    "web development",
    "mental health technology",
    "hackathons",
    "Ruby on Rails",
    "Next.js",
    "MongoDB",
    "API integration",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning covers attributes injected into <html> before
    // React hydrates — most commonly by browser extensions.
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-paper font-sans text-ink flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-moss focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
