import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  { href: "https://github.com/y1220", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/yui-watanabe-97b267198",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:ga.2.y1220@gmail.com", label: "Email", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Working on something <span className="marker">worth building</span>?
            </h2>
            <p className="mt-4 text-ink-soft">
              I read every message. Tell me what you are making and where you are stuck.
            </p>
            <Link
              href="mailto:ga.2.y1220@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-moss-deep"
            >
              <Mail className="h-4 w-4" />
              ga.2.y1220@gmail.com
            </Link>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <ul className="flex gap-2">
              {links.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-moss hover:bg-moss hover:text-paper"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-mono text-xs text-ink-soft">
              © {new Date().getFullYear()} Y1220
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
