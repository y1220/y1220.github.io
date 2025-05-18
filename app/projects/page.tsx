import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Sentiment Tracker for Developers",
    description:
      "A portable platform for sentiment tracking, designed to run on Docker. Its goal is to help developers better understand their emotional state and boost productivity by fostering collaboration between those who need help and those who can provide it.",
    image: "/Sentiment-dc.webp?height=300&width=600",
    tags: ["Ruby on Rails", "Notion API", "GitHub API", "ClickUp API", "Docker", "Chart.js"],
    demoUrl: "https://best-buttercup-0ec.notion.site/Problem-wish-to-focus-Ideal-case-To-fill-the-gap-what-is-missing-e793217dbb984d90ba0172d8a5ca4258",
    githubUrl: "https://github.com/y1220/Sentiment-dc",
    link: "Documentation",
  },
  {
    id: 2,
    title: "Serious game for Mental Health",
    description: "A Unity game designed to support mental health stability and progress. It features three mini-games for players to enjoy, with activities tracked and monitored through Google Forms.",
    image: "/planet-unity.png?height=300&width=600",
    tags: ["Unity", "C#", "Google Form", "Ruby on Rails"],
    demoUrl: "https://github.com/y1220/monster-api",
    githubUrl: "https://github.com/y1220/E-health-project?tab=readme-ov-file",
    link: "Integration",
  },
  {
    id: 3,
    title: "Group Therapy Moderator",
    description: "AI-driven system that acts as a constructive moderator, ensuring natural conversation flows and a user-friendly experience.",
    image: "/moderator.jpg?height=300&width=600",
    tags: ["Javascript", "Whisper", "LLM", "Text-to-Speech", "Speech-to-Text"],
    demoUrl: "https://www.notion.so/MindGuide-Documentation-150392fda10d80c380f4d4c66b453155",
    githubUrl: "https://github.com/Rica320/MindGuide",
    link: "Documentation",
  },
  {
    id: 4,
    title: "Java Blog API",
    description: "Basic Java project with Spring Boot, showcasing RESTful API development and database integration.",
    image: "/Java-blog.png?height=300&width=600",
    tags: ["Java", "API", "Spring Boot"],
    demoUrl: "https://github.com/y1220/myfarm",
    githubUrl: "https://github.com/y1220/newBlog",
    link: "Similar Project",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald">Projects</h1>
        <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
          A collection of my recent work, including personal and collaborative projects, highlighting my strong interest in the mental health field and my passion for exploring its potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden border-emerald/30 hover:shadow-lg transition-all">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader className="bg-pastel-yellow">
              <CardTitle className="text-emerald">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="bg-pastel-green text-emerald hover:bg-emerald hover:text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-pastel-yellow">
              <Button asChild variant="outline" className="border-emerald text-emerald hover-emerald">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button asChild className="bg-emerald hover:bg-emerald/90">
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {project.link}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
