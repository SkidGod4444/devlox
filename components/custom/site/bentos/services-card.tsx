import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function ServicesCard() {
  return (
    <div className='flex z-[500] flex-col items-center justify-center h-full w-full px-4'>
      <div className="flex flex-col mt-20 w-full max-w-[800px] mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        <div className='flex flex-col gap-4 items-center justify-center p-5 w-full'>
          
          <div className='flex flex-col md:flex-row gap-5 items-center justify-center w-full'>
            <Card className='flex w-full md:w-[500px] min-h-[220px] md:h-[250px] rounded-2xl items-center justify-center'>
              <CardHeader className='flex flex-col items-center justify-center gap-1'>
                <h1 className='font-serif text-2xl sm:text-4xl text-center'>Landing Page</h1>
                <h2 className='font-serif text-lg sm:text-xl text-red-500'>Starts from $499</h2>
              </CardHeader>
              <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center text-sm sm:text-base'>
                  A single, high-impact page designed to capture leads and drive conversions, built from scratch to production in just 2 weeks.
                </span>
              </CardContent>
            </Card>

            <Card className='flex w-full md:w-[500px] min-h-[220px] md:h-[250px] rounded-2xl items-center justify-center'>
              <CardHeader className='flex flex-col items-center justify-center gap-1'>
                <h1 className='font-serif text-2xl sm:text-4xl text-center'>FullStack Apps</h1>
                <h2 className='font-serif text-lg sm:text-xl text-red-500'>Starts from $999</h2>
              </CardHeader>
              <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center text-sm sm:text-base'>
                  Comprehensive applications with both frontend and backend, tailored to your needs. Built from scratch to production in 4 weeks.
                </span>
              </CardContent>
            </Card>
          </div>

          <div className="flex px-2 sm:px-4 py-2 w-full max-w-[800px] rounded-full bg-background border items-center justify-center text-center">
            <span className='text-xs sm:text-sm md:text-lg px-1 sm:px-2 break-words'>
              We also offer standalone services: Backend only or Frontend development-only.
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-[300px] md:max-w-[900px] px-4'>
        {[
          'Smooth Communication',
          '100% Satisfaction',
          'Post Delivery Support'
        ].map((text, i) => (
          <Button
            key={i}
            variant="secondary"
            className='flex z-[500] w-full sm:w-auto items-center justify-start md:justify-center rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'
          >
            <Image
              src="/icons/tick-mark.png"
              alt="tick mark icon"
              width={26}
              height={26}
              className='invert mr-2'
              draggable={false}
            />
            {text}
          </Button>
        ))}
      </div>
    </div>
  )
}