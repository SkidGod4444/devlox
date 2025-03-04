import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function FounderSection() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full relative'>
       <div className="w-full px-20 mb-40">
        <div className="border-t border-border" />
      </div>
      <div className="flex flex-col w-[800px] mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 bg-gradient-to-br from-secondary/40 to-muted/60 bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center relative">
        <CardHeader className='flex flex-row items-center justify-center p-5 w-full rounded-t-4xl bg-background'>
          <Image src={"/imgs/me.png"} height={150} width={150} alt='me' className='rounded-2xl border border-border' />
          <div className='flex flex-col items-start gap-2 ml-6 justify-center h-full w-full'>
            <span className='text-xl font-serif text-muted-foreground'>
              Meet the Founder
            </span>
            <h1 className='text-7xl font-serif'>Saidev Dhal ✌🏻</h1>
          </div>
        </CardHeader>

        <CardContent className='my-10 text-lg'>
          <span>I’m a former football player turned web designer. I started Lander Studio to offer top-notch results with stress-free collaboration and fair pricing. My background in sports has instilled in me a commitment to precision and excellence, which I bring to every project. Let’s create a standout online presence together.</span>
        </CardContent>

        <CardFooter className="flex h-full w-full items-center justify-between mb-8 space-x-8">
          <Button size={"lg"} className='flex cursor-pointer h-13 w-full text-xl'>@Saidev Dhal</Button>
          <Button size={"lg"} className='flex cursor-pointer h-13 w-full bg-red-500 hover:bg-red-500 text-white text-xl'>Talk to Founder</Button>
        </CardFooter>
      </div>
      <div className="w-full px-20 mt-40">
        <div className="border-b border-border" />
      </div>
    </div>
  )
}