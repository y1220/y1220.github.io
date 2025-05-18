import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample hackathon data
const hackathons = [
  {
    id: 1,
    name: "Siemens Energy Hackathon",
    date: "May 2025",
    location: "Barcelona, SPAIN",
    image: "/rack_attack.jpeg?height=300&width=600",
    description: "Won third place with a data center configuration app for infrastructure planning and optimization.",
    projectName: "Rack Attack",
    projectDescription:
      "Developed a designer tool for made to order data centers that enables clients to explore and configure equipment and services such as cooling, power, networking, and cybersecurity based on specific operational and performance needs.",
    teamSize: 4,
    achievement: "3rd Place",
    technologies: ["MongoDB", "FastAPI", "Tailwind CSS#"],
    projectUrl: "https://github.com/hiatus770/hackupc2025",
  },
  {
    id: 2,
    name: "Braynr Education Hackathon",
    date: "May 2025",
    location: "Milan, ITALY",
    image: "/braynr.png?height=300&width=600",
    description: "Explored integration of a learning progress and vocabulary support tool into the existing Braynr app, tailored for university engineering students.",
    projectName: "Edu-25",
    projectDescription:
      "A prototype that estimates time required for each study topic and visualizes learning progress as a graph. Includes a 'Lens Mode' PDF reader that highlights and defines vocabulary based on the user's individual knowledge base.",
    teamSize: 4,
    technologies: [ "Google Adk", "MongoDB", "Next.js"],
    projectUrl: "https://github.com/Infinity-GDG-AI-Hack-Team/Edu-25",
  },
]

export default function HackathonsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald">
          Hackathon Experiences
        </h1>
        <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
          A showcase of my hackathon journey highlighting the projects we've built, innovative ideas explored, and awards earned along the way.
        </p>
      </div>

      <div className="space-y-12">
        {hackathons.map((hackathon) => (
          <Card key={hackathon.id} className="overflow-hidden border-emerald/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image src={hackathon.image || "/placeholder.svg"} alt={hackathon.name} fill className="object-cover" />
                {hackathon.achievement && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald text-white px-3 py-1 text-sm flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {hackathon.achievement}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl text-emerald">{hackathon.name}</CardTitle>
                  <CardDescription className="text-lg">{hackathon.projectName}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-emerald" />
                      {hackathon.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-emerald" />
                      {hackathon.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-emerald" />
                      Team of {hackathon.teamSize}
                    </div>
                  </div>
                  <p>{hackathon.projectDescription}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {hackathon.technologies.map((tech) => (
                      <Badge key={tech} className="bg-pastel-green text-emerald hover:bg-emerald hover:text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button asChild className="bg-emerald hover:bg-emerald/90">
                    <Link href={hackathon.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
