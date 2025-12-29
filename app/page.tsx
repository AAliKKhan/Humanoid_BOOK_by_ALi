"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import { BookOpen, Brain, Cpu, Zap, Linkedin, Mail, Instagram, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-4 py-20 pt-32">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Hero Text */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                New Release 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Physical AI and{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Humanoid Robotics
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Written by <span className="font-semibold text-emerald-400">Muhammad Ali Adnan</span>
            </p>
            <Link href="/book">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-emerald-500 text-black font-bold border-0 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:bg-emerald-400 transition-all duration-300"
              >
                Read Now <BookOpen className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Right: Robot Statue with Animation */}
          <div className="relative flex items-center justify-center">
            {mounted && (
              <>
                <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-3xl animate-pulse delay-1000"></div>

                <div className="relative animate-robot-popup">
                  <img
                    src="/heroImage.png"
                    alt="Futuristic Robot"
                    className="w-full max-w-md h-auto drop-shadow-[0_0_50px_rgba(16,185,129,0.6)] animate-robot-float"
                  />
                  <div className="absolute top-20 -left-10 w-3 h-3 bg-emerald-400 rounded-full blur-sm animate-float-particle"></div>
                  <div className="absolute top-40 -right-8 w-2 h-2 bg-teal-400 rounded-full blur-sm animate-float-particle-delayed"></div>
                  <div className="absolute bottom-32 left-8 w-3 h-3 bg-emerald-500 rounded-full blur-sm animate-float-particle"></div>
                  <div className="absolute bottom-48 -right-12 w-2 h-2 bg-teal-500 rounded-full blur-sm animate-float-particle-delayed"></div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {mounted && (
            <>
              <div className="absolute top-20 left-[5%] animate-float">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center rotate-12">
                  <Cpu className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <div className="absolute top-40 right-[8%] animate-float-delayed">
                <div className="w-14 h-14 bg-teal-500/10 rounded-2xl backdrop-blur-sm border border-teal-500/30 flex items-center justify-center -rotate-6">
                  <Brain className="w-7 h-7 text-teal-400" />
                </div>
              </div>
              <div className="absolute bottom-32 left-[15%] animate-float-slow">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center rotate-45">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </>
          )}
        </div>
      </section>



      {/* Why Read This Book Section */}
<section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
        Why Read This Book?
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
        Discover a new way of learning through AI-powered, interactive, and future-ready knowledge.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Integrated Chatbot */}
      <Card className="p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 border-emerald-500/20 bg-gray-950/50 backdrop-blur">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/30">
          <Brain className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">Integrated Chatbot</h3>
        <p className="text-gray-400 leading-relaxed">
          Interact with an intelligent chatbot embedded within the book experience to ask questions, clarify concepts,
          and receive contextual explanations in real time.
        </p>
      </Card>

      {/* Integrated Translation */}
      <Card className="p-8 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300 border-teal-500/20 bg-gray-950/50 backdrop-blur">
        <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-4 border border-teal-500/30">
          <Cpu className="w-8 h-8 text-teal-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">Integrated Translation</h3>
        <p className="text-gray-400 leading-relaxed">
          Seamlessly translate content into multiple languages, making complex AI and robotics concepts accessible to a
          global audience without breaking the reading flow.
        </p>
      </Card>

      {/* Practical Insights */}
      <Card className="p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 border-emerald-500/20 bg-gray-950/50 backdrop-blur">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/30">
          <Zap className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">Practical Insights</h3>
        <p className="text-gray-400 leading-relaxed">
          Learn actionable strategies and techniques that bridge the gap between theoretical concepts and real-world
          implementation.
        </p>
      </Card>
    </div>
  </div>
</section>


      {/* Book Content Highlights Section */}
      <section id="content" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              What's Inside
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
              A comprehensive journey through the world of physical AI and humanoid robotics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Foundations of Physical AI</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Understanding the core principles, architectures, and computational models that power physical AI
                    systems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent backdrop-blur hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Humanoid Robot Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Explore mechanical engineering, sensor integration, and biomimetic approaches to humanoid robotics.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Machine Learning for Robotics</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Deep dive into reinforcement learning, computer vision, and neural networks for robot control.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent backdrop-blur hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Real-World Applications</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Case studies and practical implementations across healthcare, manufacturing, and service industries.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section id="author" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About the Author
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
              Meet the visionary behind this groundbreaking exploration of AI and robotics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Author Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Muhammad Ali Adnan</h3>
                <p className="text-emerald-400 text-lg font-semibold mb-6">AI Developer & Researcher</p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Muhammad Ali Adnan is an agentic AI developer and emerging author working at the intersection of artificial intelligence, autonomous agents, and physical systems. His work focuses on building intelligent, agent-driven architectures that can reason, act, and adapt in real-world and digital environments. As he steps into the world of authorship, he is introducing a new approach through an AI- and agent-integrated website book, blending technical depth with interactive learning. This project represents his vision of making complex AI concepts—especially Physical AI and humanoid robotics—accessible, practical, and future-ready.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-adnan-48035a2b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://portfolio-ali-adnans-projects.vercel.app/"
                  className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 hover:text-teal-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">Website</span>
                </a>

                <a
                  href="https://www.instagram.com/ali_codez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Right: Author Image */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[400px] h-[400px] rounded-full bg-emerald-500/20 blur-3xl animate-pulse"></div>
              <div className="relative">
                <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.4)] hover:shadow-[0_0_70px_rgba(16,185,129,0.6)] transition-all duration-300">
                  <img src="/author.png" alt="Muhammad Ali Adnan" className="w-full h-full object-cover" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">Ready to Explore the Future?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty">
            Join thousands of readers discovering the revolutionary world of physical AI and humanoid robotics. Get your
            copy today and stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-black text-emerald-400 hover:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
              >
                Read Now
              </Button>
            </Link>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              Read Sample Chapter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">About the Book</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A comprehensive guide to understanding the intersection of artificial intelligence and physical
                robotics, written by Muhammad Ali Adnan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#content" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Content
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#author" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Author
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with the latest in AI and robotics</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors border border-gray-800"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors border border-gray-800"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Muhammad Ali Adnan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
