import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: openai("gpt-4o"), // Using gpt-4o as a powerful general model
    system:
      "You are a helpful assistant for Lynphyl Oil & Gas Limited. Provide concise and accurate information about our fuel supply, logistics, and technical services. Encourage users to request a quote or call for urgent inquiries.",
    messages,
  })
  return result.toDataStreamResponse()
}
