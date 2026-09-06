"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { Activity, Blocks, Code, ExternalLink, Gamepad, Headphones, Laptop, Palette, Map, Github, Baby, Waypoints, HeartHandshake } from "lucide-react"
import Link from "next/link"

// Interest categories, shown as tabs
const interestCategories = [
  {
    id: "tech",
    label: "Technology",
    icon: <Laptop className="h-5 w-5" />,
    interests: [
      {
        title: "Requirement Analysis & System Design",
        description: "Passionate about uncovering user needs, navigating design constraints, and refining solutions through collaborative analysis and iterative thinking.",
        icon: <Waypoints className="h-5 w-5 text-moss" />,
      },
      {
        title: "Web Development",
        description: "Committed to building interactive web applications with modern frameworks while continuously exploring new techniques to enhance user experience.",
        icon: <Code className="h-5 w-5 text-moss" />,
      },
      {
        title: "API Integration & Web Solution Expansion",
        description: "Driven by curiosity to explore and integrate third-party APIs, staying updated on emerging technologies to expand and improve web solutions.",
        icon: <Blocks className="h-5 w-5 text-moss" />,
      },
    ],
  },
  {
    id: "wishlist",
    label: "Wish List",
    icon: <Palette className="h-5 w-5" />,
    interests: [
      {
        title: "Travel to new countries I've never been",
        description: "Dreaming of visiting new countries, immersing myself in diverse cultures, and experiencing the beauty of different landscapes.",
        icon: <Map className="h-5 w-5 text-moss" />,
      },
      {
        title: "Learn Emotional analysis",
        description: "Eager to delve into the world of emotional analysis, enhancing my understanding of human emotions and their impact on behavior.",
        icon: <HeartHandshake className="h-5 w-5 text-moss" />,
      },
      {
        title: "Make a Children's focus app",
        description: "Wishing to develop an app that helps children relax and focus, enhancing their productivity and well-being.",
        icon: <Baby className="h-5 w-5 text-moss" />,
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    icon: <Gamepad className="h-5 w-5" />,
    interests: [
      {
        title: "Running",
        description: "I'm a beginner runner, currently training daily with the aim of completing a marathon and exploring trail running.",
        icon: <Activity className="h-5 w-5 text-moss" />,
      },
      {
        title: "Traveling",
        description: "I love exploring new cultures and cuisines, and I enjoy hiking in nature.",
        icon: <Map className="h-5 w-5 text-moss" />,
      },
      {
        title: "Music",
        description: "In my free time, I enjoy playing acoustic guitar as a creative and relaxing outlet.",
        icon: <Headphones className="h-5 w-5 text-moss" />,
      },
    ],
  },
]

const techStack = [
  {
    name: "GitHub API",
    description: "Used for project management and version control integration",
    logo: "/github-mark.png?height=80&width=80",
    docsLink: "https://docs.github.com/en/rest",
    projects: [
      {
        name: "Sentiment-dc",
        description: "A dashboard to visualize repository statistics and contributor activity",
        githubLink: "https://github.com/y1220/Sentiment-dc",
      },
    ],
  },
  {
    name: "Notion API",
    description: "Integrated for documentation and knowledge management",
    logo: "/notion.svg?height=80&width=80",
    docsLink: "https://developers.notion.com/",
    projects: [
      {
        name: "Sentiment-dc",
        description: "Synchronizes tasks between Notion and project management tools",
        githubLink: "https://github.com/y1220/Sentiment-dc",
      },
    ],
  },
  {
    name: "Google Agent Developer Kit",
    description: "Used to facilitate secure authentication and cloud connectivity within agent-driven application environments.",
    logo: "/google-adk.png?height=80&width=80",
    docsLink: "https://google.github.io/adk-docs/",
    projects: [
      {
        name: "Edu-25",
        description: "Developed a prototype for a learning progress and vocabulary support tool",
        githubLink: "https://github.com/Infinity-GDG-AI-Hack-Team/Edu-25",
      },
    ],
  },
  {
    name: "Gemini API",
    description: "Utilized for AI-powered content generation and analysis",
    logo: "/gemini-color.svg?height=80&width=80",
    docsLink: "https://ai.google.dev/gemini-api",
    projects: [
      {
        name: "MindGuide",
        description: "Empowered by large language models, MindGuide can simulate a live group therapy session.",
        githubLink: "https://github.com/Rica320/MindGuide",
      },
      {
        name: "mindGuideFE",
        description: "Prototype for above mentioned project, showcasing Gemini API integration for voice and text interactions.",
        githubLink: "https://github.com/y1220/mindGuideFE",
      },
      {
        name: "dashboard",
        description: "Automated todo list generation and task management using Gemini API.",
        githubLink: "https://github.com/y1220/dashboard",
      },
    ],
  },
  {
    name: "AWS Polly",
    description: "Integrated for text-to-speech functionality in applications",
    logo: "/polly.svg?height=80&width=80",
    docsLink: "https://aws.amazon.com/polly/",
    projects: [
      {
        name: "MindGuide",
        description: "Offers voice oriented interaction, MindGuide can simulate a live group therapy session.",
        githubLink: "https://github.com/Rica320/MindGuide",
      },
    ],
  },
  {
    name: "Unity",
    description: "Developed interactive 3D experiences and simulations",
    logo: "/unity.svg?height=80&width=80",
    docsLink: "https://unity.com/",
    projects: [
      {
        name: "E-health-project",
        description: "Unity game designed to support mental health stability and progress",
        githubLink: "https://github.com/username/vr-training-simulator",
      },
    ],
  },
  {
    name: "MongoDB",
    description: "Implemented for flexible document-based data storage",
    logo: "/mongodb.png?height=80&width=80",
    docsLink: "https://www.mongodb.com/",
    projects: [
      {
        name: "Rack Attack",
        description: "Developed a designer tool for made to order data centers",
        githubLink: "https://github.com/hiatus770/hackupc2025",
      },
      {
        name: "Edu-25",
        description: "Prototype that estimates time required for each study topic and visualizes learning progress as a graph, utilizing vector databases for efficient data retrieval.",
        githubLink: "https://github.com/Infinity-GDG-AI-Hack-Team/Edu-25",
      },
    ],
  },
  {
    name: "Neo4j",
    description: "Used for graph database applications and relationship mapping",
    logo: "/neo4j.svg?height=80&width=80",
    docsLink: "https://neo4j.com/",
    projects: [
      {
        name: "PastelNote",
        description: "A note-taking application that utilizes Neo4j for relationship mapping and data visualization.",
        githubLink: "https://github.com/y1220/PastelNote",
      },
    ],
  },
]
export default function InterestsPage() {
  return (
    <div className="container py-16 md:py-24">
      <header className="max-w-[54ch]">
        <p className="eyebrow">Away from the ticket queue</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
          Interests
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          What I am curious about, what I am chasing next, and what I do when the laptop is shut.
        </p>
      </header>

      <Tabs defaultValue="tech" className="mt-14 w-full">
        <TabsList className="h-auto w-full justify-start gap-1 rounded-full border border-ink/10 bg-surface p-1.5 sm:w-auto sm:inline-flex">
          {interestCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex-1 gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors data-[state=active]:bg-moss data-[state=active]:text-paper data-[state=active]:shadow-none sm:flex-none"
            >
              {category.icon}
              <span>{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {interestCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-10">
            <div className="stagger grid gap-6 md:grid-cols-3">
              {category.interests.map((interest) => (
                <article key={interest.title} className="paper-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/70">
                    {interest.icon}
                  </div>
                  <h2 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                    {interest.title}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {interest.description}
                  </p>
                </article>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="mt-24">
        <div className="rule-label">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Tools I&apos;ve reached for
          </h2>
        </div>
        <p className="mt-4 max-w-[58ch] text-ink-soft">
          Each one is here because a project needed it. Open a card to see where it ended up.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {techStack.map((tech) => (
            <article key={tech.name} className="paper-card flex flex-col p-7">
              <div className="flex items-start gap-5">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-ink">{tech.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{tech.description}</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="mt-6 border-t border-ink/10">
                <AccordionItem value={tech.name} className="border-0">
                  <AccordionTrigger className="py-4 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft hover:text-moss-deep hover:no-underline">
                    {tech.projects.length} {tech.projects.length === 1 ? "project" : "projects"}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <ul className="space-y-4">
                      {tech.projects.map((project) => (
                        <li key={project.name} className="border-l-2 border-citron pl-4">
                          <h4 className="font-display font-semibold text-ink">{project.name}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                            {project.description}
                          </p>
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
                          >
                            <Github className="h-3.5 w-3.5" />
                            View on GitHub
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href={tech.docsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 border-t border-ink/10 pt-4 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Official docs
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
