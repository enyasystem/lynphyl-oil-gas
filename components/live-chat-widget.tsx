// WhatsApp SVG icon
const WhatsAppSVG = () => (
  <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.661 1.934 6.661L4 29l7.661-1.934A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.573-5.537-1.658l-.395-.247-4.547 1.15 1.15-4.547-.247-.395A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.43c-.276-.138-1.633-.805-1.886-.897-.253-.092-.437-.138-.62.138-.184.276-.713.897-.874 1.083-.161.184-.322.207-.598.069-.276-.138-1.165-.429-2.22-1.366-.82-.731-1.375-1.634-1.537-1.91-.161-.276-.017-.425.121-.563.124-.123.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.069-.138-.62-1.497-.849-2.051-.224-.54-.452-.467-.62-.476l-.529-.009c-.184 0-.483.069-.737.345-.253.276-.966.945-.966 2.304s.99 2.667 1.128 2.853c.138.184 1.949 2.983 4.727 4.062.661.285 1.176.456 1.578.583.663.211 1.267.181 1.744.11.532-.079 1.633-.667 1.867-1.312.23-.645.23-1.198.161-1.312-.069-.115-.253-.184-.529-.322z"/>
    </g>
  </svg>
)
"use client"

import type React from "react"
import Image from "next/image"

import { useState, useEffect, useRef } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-brand-green hover:bg-brand-green/90 text-white z-[100]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <WhatsAppSVG />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-full max-w-sm h-[450px] shadow-2xl flex flex-col z-[99]">
          <CardHeader className="bg-brand-blue-dark text-white py-3 px-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Lynphyl AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-brand-gray-dark">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_Oil_and_Gas.png"
                    width={80}
                    height={80}
                    alt="Lynphyl Logo"
                    className="mb-4 opacity-70"
                  />
                  <p className="text-sm">Hi there! How can I assist you with Lynphyl Oil & Gas services today?</p>
                  <Button
                    variant="link"
                    className="text-brand-green text-sm"
                    onClick={() => append({ role: "user", content: "Tell me about your services." })}
                  >
                    Tell me about your services.
                  </Button>
                </div>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start mb-4 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <Avatar className="mr-2 mt-1">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                      <AvatarFallback className="bg-brand-green text-white">AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      m.role === "user"
                        ? "bg-brand-blue text-white rounded-br-none"
                        : "bg-gray-100 text-brand-blue-dark rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                  </div>
                  {m.role === "user" && (
                    <Avatar className="ml-2 mt-1">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                      <AvatarFallback className="bg-brand-gray-dark text-white">You</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && messages.length > 0 && (
                <div className="flex items-start mb-4 justify-start">
                  <Avatar className="mr-2 mt-1">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                    <AvatarFallback className="bg-brand-green text-white">AI</AvatarFallback>
                  </Avatar>
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-brand-blue-dark rounded-bl-none">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={handleFormSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading} className="bg-brand-green hover:bg-brand-green/90">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
