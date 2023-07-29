import { Button } from "@/components/ui/button"
import Link from "next/link"

const landingPage = () => {
  return (
    <div>
      landingPage
      <div>
        <Link href='/sign-in'>
          <Button>login</Button>
        </Link>
        <Link href='/sign-up'>
          <Button>register</Button>
        </Link>
      </div>
    </div>
  )
}

export default landingPage
