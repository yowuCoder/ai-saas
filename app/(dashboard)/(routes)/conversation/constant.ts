import * as z from "zod"

export const ConversationSchema = z.object({
  prompt: z.string().min(1, "Prompt must be at least 1 character long"),
  response: z.string().min(1, "Response must be at least 1 character long"),
})
