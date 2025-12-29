import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Languages } from "lucide-react"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"

interface TextSelectionToolbarProps {
  onAskAgent: (text: string) => void
  onTranslate: (text: string) => void
}

export default function TextSelectionToolbar({ onAskAgent, onTranslate }: TextSelectionToolbarProps) {
  const [selectedText, setSelectedText] = useState("")
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection()
      const text = selection?.toString().trim()

      if (text && text.length > 0) {
        setSelectedText(text)

        const range = selection?.getRangeAt(0)
        const rect = range?.getBoundingClientRect()

        if (rect) {
          setPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
          })
          setIsVisible(true)
        }
      } else {
        setIsVisible(false)
      }
    }

    document.addEventListener("mouseup", handleSelection)
    document.addEventListener("touchend", handleSelection)

    return () => {
      document.removeEventListener("mouseup", handleSelection)
      document.removeEventListener("touchend", handleSelection)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed z-50 transform -translate-x-1/2 -translate-y-full"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="bg-gray-900 border-2 border-emerald-500 rounded-xl shadow-2xl p-2 flex gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-xl -z-10" />
        
        <SignedIn>
          <Button
            onClick={() => {
              onAskAgent(selectedText)
              setIsVisible(false)
            }}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            Ask Agent
          </Button>

          <Button
            onClick={() => {
              onTranslate(selectedText)
              setIsVisible(false)
            }}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg"
          >
            <Languages className="w-4 h-4" />
            Translate
          </Button>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg">
              <MessageSquare className="w-4 h-4" />
              Ask Agent
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg">
              <Languages className="w-4 h-4" />
              Translate
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  )
}
