"use client"

import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
})

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='p-4 bg-transparent flex item-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          <Image fill src='/next.svg' alt='logo' />
        </div>
        <h1 className={cn("text-2xl font-bold text-white ", font.className)}>
          genius
        </h1>
      </Link>
      <div>
        <Link href={isSignedIn ? "dashboard" : "sign-up"}></Link>
      </div>
    </nav>
  )
}
