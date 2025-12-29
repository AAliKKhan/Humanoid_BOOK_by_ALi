"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-500/20 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent cursor-pointer">
                Physical AI
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#home"
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#about"
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#author"
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              Author
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#content"
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              Content
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#contact"
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link href="/book">
              <Button className="bg-emerald-500 text-black font-bold border-0 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] hover:bg-emerald-400 transition-all duration-300">
                Read Now
              </Button>
            </Link>
            
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500/20">
            <nav className="flex flex-col gap-4">
              <a
                href="/#home"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/#about"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#author"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Author
              </a>
              <a
                href="/#content"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Content
              </a>
              <a
                href="/#contact"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Link href="/book" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-emerald-500 text-black font-bold border-0 w-full">Read Now</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
