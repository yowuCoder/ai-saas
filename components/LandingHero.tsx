"use client"
import { useAuth } from "@clerk/nextjs"
import TypewriterComponent from "typewriter-effect"
import { Button } from "./ui/button"
import Link from "next/link"

const LandingHero = () => {
  const { isSignedIn } = useAuth()
  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl space-y-5 font-extrabold'>
        <h1>The bast ai tools</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: [
                "chatbot",
                "Music Generation",
                "Image Generation",
                "Video Generation",
                "Code Generation",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Create content using ai 10x faster
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant='premium'
            className='md:text-lg p-4 md:p-5 rounded-full font-semibold'
          >
            Start Generating for free
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingHero
