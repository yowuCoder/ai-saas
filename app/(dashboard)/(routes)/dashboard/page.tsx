"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/code",
  },
]
const DashboardPage = () => {
  const router = useRouter()
  return (
    <div>
      <div className='mb-8 space-y-4 '>
        <h2 className=' text-2xl  md:text-4xl font-bold text-center'>
          the power of AI
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          AI is a powerful tool that can be used to generate content. This
          website is a demonstration of the power of AI.
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className='p-4 border-black/5 
              flex justify-between
            items-center
              hover:shadow-md hover:border-black/10
              transition cursor-pointer
              '
            onClick={() => router.push(tool.href)}
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
