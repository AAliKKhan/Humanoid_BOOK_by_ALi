"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Languages, Loader2 } from "lucide-react"

interface TranslationModalProps {
  isOpen: boolean
  onClose: () => void
  selectedText: string
}

const languages = [
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "ur", name: "Urdu", flag: "🇵🇰" },
]

export default function TranslationModal({ isOpen, onClose, selectedText }: TranslationModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [translation, setTranslation] = useState("")
  const [isTranslating, setIsTranslating] = useState(false)

  if (!isOpen) return null

  const handleTranslate = async () => {
    if (!selectedLanguage) return

    setIsTranslating(true)
    setTranslation("")

    try {
      const response = await fetch("http://localhost:8000/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: selectedText,
          language: selectedLanguage,
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      setTranslation(data.reply)
    } catch (error) {
      console.error("Failed to fetch translation:", error)
      setTranslation("Sorry, I'm having trouble translating. Please try again later.")
    } finally {
      setIsTranslating(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-gray-900 border-2 border-emerald-500 rounded-2xl shadow-2xl overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl" />

        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-white font-bold text-xl">Translate Text</h2>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Original Text */}
          <div>
            <label className="block text-emerald-400 font-semibold mb-2 text-sm">Selected Text</label>
            <div className="bg-gray-800 border border-emerald-500/30 rounded-xl p-4 text-gray-300 text-sm leading-relaxed max-h-32 overflow-y-auto">
              {selectedText}
            </div>
          </div>

          {/* Language Selection */}
          <div>
            <label className="block text-emerald-400 font-semibold mb-3 text-sm">Select Target Language</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    selectedLanguage === lang.code
                      ? "border-emerald-500 bg-emerald-500/20 text-white"
                      : "border-gray-700 bg-gray-800 text-gray-400 hover:border-emerald-500/50 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Translate Button */}
          <Button
            onClick={handleTranslate}
            disabled={!selectedLanguage || isTranslating}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
          >
            {isTranslating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Translating...
              </>
            ) : (
              <>
                <Languages className="w-5 h-5 mr-2" />
                Translate
              </>
            )}
          </Button>

          {/* Translation Result */}
          {translation && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <label className="block text-emerald-400 font-semibold mb-2 text-sm">Translation</label>
              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500 rounded-xl p-4 text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">
                {translation}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
