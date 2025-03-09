import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

export default function ServicesCard() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className="flex flex-col mt-20 w-auto mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        <div className='flex flex-col gap-4 items-center justify-center p-5 w-[800px]'>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'>
            <Card className='flex md:h-[250px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='flex font-serif text-4xl'>Landing Page</h1>
              </CardHeader>
              <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>A single, high-impact page designed to capture leads and drive conversions, built from scratch to production in 2 weeks.</span>
              </CardContent>
            </Card>
            <Card className='flex md:h-[250px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
                <h1 className='flex font-serif text-4xl'>Landing Page</h1>
              </CardHeader>
              <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>A single, high-impact page designed to capture leads and drive conversions, built from scratch to production in 2 weeks.</span>
              </CardContent>
            </Card>
          </div>
          <div className="flex px-4 py-1 w-auto rounded-full bg-background border items-center">
        <span className='text-lg px-3 align-middle'>We also offer standalone services: Backend only or Frontend development-only.</span>
        </div>
        </div>
      </div>
    </div>
  )
}
