import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FounderSection() {
  return (
    <div className='flex z-[500] flex-col items-center justify-center h-full w-full relative px-4 sm:px-0'>
      <div className="w-full sm:px-20 px-4 mb-8 sm:mb-40">
        <div className="border-t border-border" />
      </div>

      <div className="flex flex-col w-full max-w-[800px] mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 bg-gradient-to-br from-secondary/40 to-muted/60 bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center relative">
        
        <CardHeader className='flex flex-col sm:flex-row items-center justify-center p-4 sm:p-5 w-full rounded-t-4xl bg-background text-center sm:text-left'>
          <Image 
            src={"/imgs/me.png"} 
            height={120} 
            width={120} 
            alt='me' 
            className='rounded-2xl border border-border sm:h-[150px] sm:w-[150px]' 
          />
          <div className='flex flex-col items-center sm:items-start gap-2 mt-4 sm:mt-0 sm:ml-6 justify-center h-full w-full'>
            <span className='text-lg sm:text-xl font-serif text-muted-foreground'>
              Meet the Founder
            </span>
            <h1 className='text-3xl sm:text-7xl font-serif'>Saidev Dhal ✌🏻</h1>
          </div>
        </CardHeader>

        <CardContent className='my-6 sm:my-10 text-sm sm:text-lg text-center sm:text-left px-3 sm:px-5'>
          <span>
            Yooo! I am Saidev Dhal, a passionate software developer and a CS student with a knack for creating stunning and functional softwares. My journey in the tech world has been fueled by a love for innovation and a desire to make a positive impact through technology. I believe in the power of creativity and collaboration, and I&apos;m always eager to take on new challenges. Let&apos;s connect and explore the endless possibilities together!
          </span>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row w-full gap-3 sm:gap-8 items-center justify-between px-3 sm:px-4 mb-6 sm:mb-8">
          <Link href={"https://l.devwtf.in/x"} target="_blank" rel="noreferrer" className='w-full'>
            <Button size={"lg"} className='w-full text-base sm:text-xl cursor-pointer'>
              Follow on X @Saidev Dhal
            </Button>
          </Link>

          <Link href={"https://l.devwtf.in/wp"} target="_blank" rel="noreferrer" className='w-full'>
            <Button size={"lg"} className='w-full bg-red-500 hover:bg-red-500 text-white text-base sm:text-xl cursor-pointer'>
              Talk to Founder
            </Button>
          </Link>
        </CardFooter>
      </div>

      <div className="w-full sm:px-20 px-4 mt-8 sm:mt-40">
        <div className="border-b border-border" />
      </div>
    </div>
  )
}