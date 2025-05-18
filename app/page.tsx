import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Award, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-pastel-yellow">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-emerald">
                  Hello, I'm <span className="text-black">Yui</span>
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Hi there, thanks for visiting my page👋
                </p>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  I'm a passionate backend developer for web development and creative problem-solving.
                  While I'm happily working on my current projects, I'm also super excited about connecting with people who share similar passions for meaningful, long-term collaborations.
                </p>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Feel free to reach me out!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="bg-emerald hover:bg-emerald/90">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-pastel-green overflow-hidden border-4 border-emerald">
                <Image
                  src="/Futa.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12 md:py-20 bg-pastel-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald">What I Do</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the projects and topics I’m most passionate about and where I’ve built my skills.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Link href="/projects" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-emerald p-6 bg-pastel-yellow transition-all hover:shadow-lg">
                <div className="rounded-full bg-emerald p-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald group-hover:underline">Projects</h3>
                <p className="text-center text-gray-700">
                  Discover my portfolio of web applications, software solutions, and creative coding projects.
                </p>
              </div>
            </Link>
            <Link href="/hackathons" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-emerald p-6 bg-pastel-yellow transition-all hover:shadow-lg">
                <div className="rounded-full bg-emerald p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald group-hover:underline">Hackathons</h3>
                <p className="text-center text-gray-700">
                  Explore my hackathon experiences, winning projects, and collaborative innovations.
                </p>
              </div>
            </Link>
            <Link href="/interests" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-emerald p-6 bg-pastel-yellow transition-all hover:shadow-lg">
                <div className="rounded-full bg-emerald p-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald group-hover:underline">Interests</h3>
                <p className="text-center text-gray-700">
                  Learn about my hobbies, research interests, and what keeps me inspired outside of work.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
