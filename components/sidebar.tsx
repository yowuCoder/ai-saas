"use client"

import Link from "next/link"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react"
const monsterrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
})
import { usePathname } from "next/navigation"
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-700",
  },
  {
    label: "code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/setting",
  },
]

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='spcae-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image fill src='/next.svg' alt='Logo' />
          </div>
          <h1 className={cn("text-2xl font-bold", monsterrat.className)}>
            Genius
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  hover:text-white hover:bg-white/10 rounded-lg transition",
                route.href === pathname ? "bg-white/10" : ""
              )}
            >
              <div>
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
