import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectGallery from "@/components/project-gallery"

const projects = [
  {
    id: 6,
    title: "Mentor Dashboard",
    focus: "Tutoring",
    description:
      "A tracker for one-to-one tutoring. Each mentoring session is logged against a student, so the running picture of how that student is doing stays current, and the work coming out of a session becomes a to-do item with its own status and progress. The dashboard summarises session frequency, active students, and the tasks still needing attention. The interface runs in both English and Japanese.",
    images: ["/mentor-dashboard.jpeg", "/mentor-session.jpeg"],
    tags: [],
    demoUrl: null,
    githubUrl: null,
    link: null,
  },
  {
    id: 5,
    title: "DriveReady",
    focus: "Exam preparation",
    description:
      "A study companion for the driving licence theory exam. Multiple-choice quizzes are grouped by category — road signs, traffic rules, safety, vehicle knowledge, parking — so progress is tracked per topic and it stays obvious what to revise next.",
    images: ["/driveready-quiz.png", "/driveready-dashboard.png"],
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    demoUrl: "https://driving-app-orpin.vercel.app/",
    githubUrl: null,
    link: "Live app",
  },
  {
    id: 1,
    title: "Sentiment Tracker for Developers",
    focus: "Developer wellbeing",
    description:
      "A portable platform for sentiment tracking, designed to run on Docker. Its goal is to help developers better understand their emotional state and boost productivity by fostering collaboration between those who need help and those who can provide it.",
    images: ["/Sentiment-dc.webp"],
    tags: ["Ruby on Rails", "Notion API", "GitHub API", "ClickUp API", "Docker", "Chart.js"],
    demoUrl:
      "https://best-buttercup-0ec.notion.site/Problem-wish-to-focus-Ideal-case-To-fill-the-gap-what-is-missing-e793217dbb984d90ba0172d8a5ca4258",
    githubUrl: "https://github.com/y1220/Sentiment-dc",
    link: "Documentation",
  },
  {
    id: 2,
    title: "Serious game for Mental Health",
    focus: "Mental health",
    description:
      "A Unity game designed to support mental health stability and progress. It features three mini-games for players to enjoy, with activities tracked and monitored through Google Forms.",
    images: ["/planet-unity.png"],
    tags: ["Unity", "C#", "Google Form", "Ruby on Rails"],
    demoUrl: "https://github.com/y1220/monster-api",
    githubUrl: "https://github.com/y1220/E-health-project?tab=readme-ov-file",
    link: "Integration",
  },
  {
    id: 3,
    title: "Group Therapy Moderator",
    focus: "Conversational AI",
    description:
      "AI-driven system that acts as a constructive moderator, ensuring natural conversation flows and a user-friendly experience.",
    images: ["/moderator.jpg"],
    tags: ["Javascript", "Whisper", "LLM", "Text-to-Speech", "Speech-to-Text"],
    demoUrl: "https://www.notion.so/MindGuide-Documentation-150392fda10d80c380f4d4c66b453155",
    githubUrl: "https://github.com/Rica320/MindGuide",
    link: "Documentation",
  },
  {
    id: 4,
    title: "Java Blog API",
    focus: "Fundamentals",
    description:
      "Basic Java project with Spring Boot, showcasing RESTful API development and database integration.",
    images: ["/Java-blog.png"],
    tags: ["Java", "API", "Spring Boot"],
    demoUrl: "https://github.com/y1220/myfarm",
    githubUrl: "https://github.com/y1220/newBlog",
    link: "Similar Project",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-16 md:py-24">
      <header className="max-w-[54ch]">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
          Projects
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Personal and collaborative builds. Most of them circle the same question: how do you make
          software that helps someone notice how they are actually doing?
        </p>
      </header>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="paper-card flex flex-col overflow-hidden">
            {project.images.length > 1 ? (
              <ProjectGallery images={project.images} title={project.title} />
            ) : (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-sage">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-7">
              <p className="eyebrow">{project.focus}</p>
              <h2 className="mt-2.5 font-display text-2xl font-semibold leading-snug text-ink">
                {project.title}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2 empty:mt-0">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-sage/70 px-3 py-1 font-mono text-[0.7rem] text-moss-deep"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 empty:pt-0">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                )}
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.link}
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
