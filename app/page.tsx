import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const sections = [
  {
    href: "/projects",
    label: "Projects",
    count: "5 builds",
    description:
      "A study app for the driving licence theory exam, sentiment tooling for developer teams, a Unity game for mental health, an AI group-therapy moderator, and a Spring Boot API.",
  },
  {
    href: "/hackathons",
    label: "Hackathons",
    count: "2 events, 1 podium",
    description:
      "Two days, four people, one prototype. Data-centre configuration in Barcelona and a study-progress tool in Milan.",
  },
  {
    href: "/interests",
    label: "Interests",
    count: "8 tools explored",
    description:
      "The APIs I keep coming back to, plus what happens away from the keyboard — running, travelling, acoustic guitar.",
  },
]

const stack = [
  "Ruby on Rails",
  "Next.js",
  "FastAPI",
  "MongoDB",
  "Neo4j",
  "Unity",
  "Docker",
  "Gemini API",
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="ruled-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sage/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="stagger">
              <p className="eyebrow flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
                Backend developer · open to collaborations
              </p>

              {/* Line breaks are authored for sm and up; below that the
                  headline wraps on its own so it never overflows the viewport. */}
              <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink min-[420px]:text-[2.4rem] sm:text-[3.4rem] sm:leading-[1.03] sm:tracking-[-0.035em] xl:text-[4.25rem]">
                I build the parts
                <br className="hidden sm:block" />{" "}
                nobody sees, for
                <br className="hidden sm:block" />{" "}
                <span className="marker marker--tall">software you feel</span>
              </h1>

              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
                I&apos;m Yui. Most of my work sits behind the interface — APIs, data models, integrations —
                and most of it points at mental health: tools that help people notice how they are doing
                and ask for help sooner.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-moss px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-moss-deep"
                >
                  See what I&apos;ve built
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="mailto:ga.2.y1220@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-moss hover:text-moss-deep"
                >
                  Start a conversation
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">
              {/* Offset moss rule behind the portrait, echoing the notebook margin */}
              <div
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] border border-moss/45"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sage">
                <Image
                  src="/Futa.jpeg"
                  alt="Futa, a black and white cat, looking straight at the camera"
                  fill
                  sizes="(max-width: 1024px) 380px, 420px"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="eyebrow mt-4 text-right">Futa — supervising</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack strip ──────────────────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-surface">
        <div className="container flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          <p className="eyebrow">Working with</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {stack.map((item) => (
              <li key={item} className="font-mono text-sm text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Index ────────────────────────────────────────────────────── */}
      <section className="container py-20 md:py-28">
        <div className="rule-label">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Where to look</h2>
        </div>

        <ul className="mt-12 border-t border-ink/10">
          {sections.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                className="group grid items-baseline gap-x-8 gap-y-3 border-b border-ink/10 py-8 transition-colors hover:bg-surface/70 md:grid-cols-[minmax(0,14rem)_1fr_auto] md:px-4"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-moss-deep">
                    {section.label}
                  </h3>
                  <p className="eyebrow mt-1.5">{section.count}</p>
                </div>
                <p className="max-w-[60ch] text-ink-soft">{section.description}</p>
                <ArrowUpRight className="hidden h-6 w-6 text-ink-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-moss md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
