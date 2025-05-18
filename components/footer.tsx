import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-pastel-green py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-emerald md:text-left">
          &copy; {new Date().getFullYear()} y1220 Portfolio. All rights reserved.
        </p>

        <div className="flex gap-4">
          <Link href="https://github.com/y1220" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-emerald hover:text-emerald/80" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/yui-watanabe-97b267198" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-emerald hover:text-emerald/80" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:ga.2.y1220@gmail.com">
            <Mail className="h-5 w-5 text-emerald hover:text-emerald/80" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
