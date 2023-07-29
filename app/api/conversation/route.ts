import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { OpenAIApi, Configuration } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    if (!configuration.apiKey) {
      return new NextResponse("apiKey not configured", { status: 500 })
    }
    return NextResponse.json({ message: "Hello World" })
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function POST(req: Request) {
  console.log("🚀 ~ file: route.ts:28 ~ POST ~ req:", req)
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    if (!configuration.apiKey) {
      return new NextResponse("apiKey not configured", { status: 500 })
    }
    if (!messages) {
      return new NextResponse("Message is required", { status: 400 })
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    })
    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
