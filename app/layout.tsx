import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Welcome to My Portfolio",
  icons: {
    icon: "/favicon_cat.ico",
    shortcut: "/favicon_cat.ico",
    apple: "/favicon_cat.ico",
  },
  keywords: [
    "portfolio",
    "developer",
    "projects",
    "web development",
    "programming",
    "software engineering",
    "technology",
    "hackathons",
    "open source",
    "collaboration",
    "innovation",
    "problem solving",
    "creativity",
    "teamwork",
    "backend development",
    "frontend development",
    "full stack development",
    "cloud computing",
    "artificial intelligence",
    "machine learning",
    "data science",
    "user experience",
    "user interface",
    "design",
    "agile",
    "scrum",
    "devops",
    "continuous integration",
    "continuous deployment",
    "version control",
    "git",
    "github"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pastel-yellow min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
