import * as z from "zod"

export const ConversationSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
})
