"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./card"

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    avatar: "A",
    description: "this is a description",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
]
const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className='bg-[#192339] text-[#f3f4f6] border-none'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'> {testimonial.name}</p>
                  <p className='text-zinc-400 text-sm'>{testimonial.title}</p>
                </div>
              </CardTitle>

              <CardContent className='pt-4 px-0'>
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent
