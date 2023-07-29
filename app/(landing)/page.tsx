import LandingHero from "@/components/LandingHero"
import { LandingNavbar } from "@/components/LandingNavbar"
import LandingContent from "@/components/ui/LandingContent"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

const landingPage = () => {
  // const router = useRouter()
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default landingPage
