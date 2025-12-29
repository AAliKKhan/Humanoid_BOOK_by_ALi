import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bot, X, Send, Sparkles, Trash2 } from "lucide-react" // Import Trash2 icon
import ReactMarkdown from "react-markdown" // Import react-markdown
import { useAuth } from "@clerk/nextjs" // Import useAuth

interface Message {
  role: "user" | "assistant"
  content: string
}

interface ChatbotProps {
  initialMessage?: string
  isOpen: boolean // From parent
  setIsOpen: (isOpen: boolean) => void // From parent
  onInitialMessageConsumed: () => void // Callback from parent
}

export default function Chatbot({
  initialMessage,
  isOpen,
  setIsOpen,
  onInitialMessageConsumed,
}: ChatbotProps) {
  // const [isOpen, setIsOpen] = useState(false) // Removed internal state
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { getToken } = useAuth() // Restored this line

  
    useEffect(() => {
      // Load messages from local storage on mount
      const savedMessages = localStorage.getItem("chat_messages")
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages))
      }
    }, [])
  
    useEffect(() => {
      // Save messages to local storage whenever they change
      if (messages.length > 0) {
        localStorage.setItem("chat_messages", JSON.stringify(messages))
      }
    }, [messages])
  
    useEffect(() => {
      if (initialMessage && isOpen) {
        handleSendMessage(initialMessage)
        onInitialMessageConsumed() // Clear the initial message in parent
      }
    }, [initialMessage, isOpen, onInitialMessageConsumed])
  
    const clearMessages = () => {
      setMessages([])
      localStorage.removeItem("chat_messages")
    }
  
    const handleSendMessage = async (messageText?: string) => {
      const textToSend = messageText || input
      if (!textToSend.trim()) return
  
      const userMessage: Message = { role: "user", content: textToSend }
      const updatedMessages: Message[] = [...messages, userMessage]
      setMessages(updatedMessages)
      setInput("")
      setIsLoading(true)
      
      // Add an empty assistant message that will be populated by the stream
      const assistantMessage: Message = { role: "assistant", content: "" }
      setMessages([...updatedMessages, assistantMessage])
  
      try {
        const token = await getToken()
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ali67895555-backend.hf.space';
      
      const baseUrl = apiUrl.replace(/\/$/, ''); // Ensure no trailing slash
      const chatUrl = new URL(`${baseUrl}/chat/`);
      
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ user_message: { role: 'user', content: textToSend } }),
      });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        if (!response.body) {
          throw new Error("Response body is null")
        }
  
        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let done = false
  
        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone
          const chunk = decoder.decode(value, { stream: true })
          
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1]
            const updatedLastMessage = {
              ...lastMessage,
              content: lastMessage.content + chunk,
            }
            return [...prevMessages.slice(0, -1), updatedLastMessage]
          })
        }
  
      } catch (error) {
        console.error("Failed to fetch chatbot response:", error)
        const errorMessage: Message = {
          role: "assistant",
          content: `Sorry, I'm having trouble connecting. Please check the backend server and try again.`,
        }
        setMessages((prev) => [...prev.slice(0, -1), errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  return (
    <>
      {/* Floating Robot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />

          {/* Button */}
          <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            {isOpen ? <X className="w-7 h-7 text-white" /> : <Bot className="w-7 h-7 text-white" />}
          </div>

          {/* Notification dot */}
          {!isOpen && messages.length === 0 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900 animate-bounce" />
          )}
        </div>
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] max-w-md h-[600px] bg-gray-900 border-2 border-emerald-500 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl" />

          {/* Header */}
          <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">AI Assistant</h3>
                <p className="text-emerald-100 text-xs">Ask me anything about the book</p>
              </div>
            </div>
            <Button
              onClick={clearMessages}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-emerald-700/50"
              title="Clear Chat"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="relative flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/95">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-8">
                <Bot className="w-12 h-12 mx-auto mb-3 text-emerald-500" />
                <p className="text-sm">Select text in the book and click "Ask Agent"</p>
                <p className="text-xs mt-2">or start a conversation below</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
                      : "bg-gray-800 text-gray-100 border border-emerald-500/30"
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <div className="prose prose-sm prose-invert max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 border border-emerald-500/30 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="relative p-4 bg-gray-800/50 border-t border-emerald-500/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-xl border border-emerald-500/30 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-500"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
