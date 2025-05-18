import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Code, ExternalLink, Gamepad, Headphones, ImageIcon, Laptop, Palette, Map, Github, Baby } from "lucide-react"
import Link from "next/link"

// Sample interests data
const interestCategories = [
  {
    id: "tech",
    label: "Technology",
    icon: <Laptop className="h-5 w-5" />,
    interests: [
      {
        title: "Requirement Analysis & System Design",
        description: "Passionate about uncovering user needs, navigating design constraints, and refining solutions through collaborative analysis and iterative thinking.",
        icon: <Code className="h-10 w-10 text-emerald" />,
      },
      {
        title: "Web Development",
        description: "Committed to building interactive web applications with modern frameworks while continuously exploring new techniques to enhance user experience.",
        icon: <Code className="h-10 w-10 text-emerald" />,
      },
      {
        title: "API Integration & Web Solution Expansion",
        description: "Driven by curiosity to explore and integrate third-party APIs, staying updated on emerging technologies to expand and improve web solutions.",
        icon: <Code className="h-10 w-10 text-emerald" />,
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
        icon: <Map className="h-10 w-10 text-emerald" />,
      },
      {
        title: "Learn Emotional analysis",
        description: "Eager to delve into the world of emotional analysis, enhancing my understanding of human emotions and their impact on behavior.",
        icon: <Code className="h-10 w-10 text-emerald" />,
      },
      {
        title: "Make a Children's focus app",
        description: "Wishing to develop an app that helps children relax and focus, enhancing their productivity and well-being.",
        icon: <Baby className="h-10 w-10 text-emerald" />,
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
        icon: <Activity className="h-10 w-10 text-emerald" />,
      },
      {
        title: "Traveling",
        description: "I love exploring new cultures and cuisines, and I enjoy hiking in nature.",
        icon: <Map className="h-10 w-10 text-emerald" />,
      },
      {
        title: "Music",
        description: "In my free time, I enjoy playing acoustic guitar as a creative and relaxing outlet.",
        icon: <Headphones className="h-10 w-10 text-emerald" />,
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
    description: "Used the it to facilitate secure authentication and cloud connectivity within agent-driven application environments.",
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
    <div className="container py-12 md:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald">My Interests🦄✨</h1>
        <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
          Discover what keeps me curious, creative, and inspired beyond my professional work.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-pastel-green rounded-xl -z-10 transform translate-x-4 translate-y-4"></div>
        <div className="bg-pastel-yellow rounded-xl p-6 md:p-8 border border-emerald">
          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {interestCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-emerald data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {interestCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.interests.map((interest, index) => (
                    <Card key={index} className="border-emerald/30 hover:shadow-md transition-all">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          {interest.icon}
                          <CardTitle className="text-xl text-emerald">{interest.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-700">{interest.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-emerald">
            APIs & Frameworks I've Explored
          </h2>
          <p className="max-w-[700px] text-gray-700">
            A showcase of technologies and tools I've utilized in my projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((tech, index) => (
            <Card key={index} className="border-emerald/30 overflow-hidden">
              <div className="flex items-center gap-4 p-6 bg-pastel-yellow">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                </div>
                <div>
                  <CardTitle className="text-xl text-emerald">{tech.name}</CardTitle>
                  <CardDescription className="text-gray-700 mt-1">{tech.description}</CardDescription>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="projects" className="border-t border-emerald/30">
                  <AccordionTrigger className="px-6 py-3 text-emerald hover:text-emerald/80">
                    Related Projects
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      {tech.projects.map((project, idx) => (
                        <div key={idx} className="border border-emerald/20 rounded-md p-4 bg-pastel-yellow/50">
                          <h4 className="font-medium text-emerald">{project.name}</h4>
                          <p className="text-sm text-gray-700 mt-1 mb-3">{project.description}</p>
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-emerald hover:underline"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            View on GitHub
                          </Link>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <CardFooter className="flex justify-between p-4 bg-pastel-green/30 border-t border-emerald/30">
                <Badge className="bg-pastel-green text-emerald hover:bg-emerald hover:text-white">
                  {tech.projects.length} {tech.projects.length === 1 ? "Project" : "Projects"}
                </Badge>
                <Button asChild variant="outline" size="sm" className="border-emerald text-emerald hover-emerald">
                  <Link href={tech.docsLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Docs
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
