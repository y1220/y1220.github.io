import { Award, Calendar, MapPin, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Ordered most recent first — the sequence is the point of this page
const hackathons = [
  {
    id: 1,
    name: "Siemens Energy Hackathon",
    date: "May 2025",
    location: "Barcelona, Spain",
    image: "/rack_attack.jpeg",
    projectName: "Rack Attack",
    projectDescription:
      "Developed a designer tool for made to order data centers that enables clients to explore and configure equipment and services such as cooling, power, networking, and cybersecurity based on specific operational and performance needs.",
    teamSize: 4,
    achievement: "3rd Place",
    technologies: ["MongoDB", "FastAPI", "Tailwind CSS"],
    projectUrl: "https://github.com/hiatus770/hackupc2025",
  },
  {
    id: 2,
    name: "Braynr Education Hackathon",
    date: "May 2025",
    location: "Milan, Italy",
    image: "/braynr.png",
    projectName: "Edu-25",
    projectDescription:
      "A prototype that estimates time required for each study topic and visualizes learning progress as a graph. Includes a 'Lens Mode' PDF reader that highlights and defines vocabulary based on the user's individual knowledge base.",
    teamSize: 4,
    technologies: ["Google ADK", "MongoDB", "Next.js"],
    projectUrl: "https://github.com/Infinity-GDG-AI-Hack-Team/Edu-25",
  },
]

export default function HackathonsPage() {
  return (
    <div className="container py-16 md:py-24">
      <header className="max-w-[54ch]">
        <p className="eyebrow">48 hours at a time</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
          Hackathons
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Small teams, a hard deadline, and a problem nobody on the team has solved before. Here is what
          we shipped and what it took.
        </p>
      </header>

      {/* Timeline: a marked rail on the left, entries in reverse chronological order */}
      <ol className="mt-16 space-y-14 md:border-l md:border-ink/15 md:pl-12">
        {hackathons.map((hackathon) => (
          <li key={hackathon.id} className="relative">
            <span
              className="absolute -left-[3.35rem] top-2 hidden h-3 w-3 rounded-full border-2 border-paper bg-moss md:block"
              aria-hidden="true"
            />

            <article className="paper-card overflow-hidden">
              <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="relative aspect-[4/3] w-full bg-sage md:aspect-auto md:min-h-[320px]">
                  <Image
                    src={hackathon.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                  {hackathon.achievement && (
                    <p className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-citron px-3.5 py-1.5 font-mono text-xs font-medium text-ink shadow-lift">
                      <Award className="h-3.5 w-3.5" />
                      {hackathon.achievement}
                    </p>
                  )}
                </div>

                <div className="p-7 md:p-9">
                  <p className="eyebrow">{hackathon.name}</p>
                  <h2 className="mt-2.5 font-display text-3xl font-semibold text-ink">
                    {hackathon.projectName}
                  </h2>

                  <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-soft">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-moss" aria-hidden="true" />
                      <dt className="sr-only">Date</dt>
                      <dd>{hackathon.date}</dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-moss" aria-hidden="true" />
                      <dt className="sr-only">Location</dt>
                      <dd>{hackathon.location}</dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-moss" aria-hidden="true" />
                      <dt className="sr-only">Team size</dt>
                      <dd>Team of {hackathon.teamSize}</dd>
                    </div>
                  </dl>

                  <p className="mt-5 leading-relaxed text-ink-soft">{hackathon.projectDescription}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-sage/70 px-3 py-1 font-mono text-[0.7rem] text-moss-deep"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={hackathon.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
                  >
                    View {hackathon.projectName} on GitHub
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  )
}
