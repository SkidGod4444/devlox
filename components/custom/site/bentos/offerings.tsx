import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import { IconDeviceDesktopAnalytics, IconMoodCrazyHappyFilled, IconScale, IconStarFilled, IconTimeDuration45, IconWorldWww } from '@tabler/icons-react';

export default function OfferingsCards() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className="flex flex-col mt-20 w-auto mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-[800px]'>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
            <IconWorldWww stroke={1.5} className='text-red-500 size-10' />
            <h1 className='flex font-serif text-4xl'>SEO Optimized</h1>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>Boost your online presence with SEO-first designs that drive traffic, enhance search rankings, and attract potential customers effectively.</span>
              </CardContent>
          </Card>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
            <IconDeviceDesktopAnalytics stroke={1.5} className='text-red-500 size-10' />
            <h1 className='flex font-serif text-4xl'>Peak Performance</h1>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>Experience lightning-fast load times, smooth interactions, and seamless performance on all devices, ensuring an engaging user journey.</span>
              </CardContent>
          </Card>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-[800px]'>
        <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
            <IconTimeDuration45 stroke={1.5} className='text-red-500 size-10' />
            <h1 className='flex font-serif text-4xl'>Fast Turnaround</h1>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>Achieve a market-ready MVP within 7 to 14 days, blending speed and quality to capitalize on business opportunities faster.</span>
              </CardContent>
          </Card>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
            <IconScale stroke={1.5} className='text-red-500 size-10' />
            <h1 className='flex font-serif text-4xl'>Scalable & Robust</h1>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>Built with scalability in mind, our solutions adapt to your business growth, offering stability and robustness from the ground up.</span>
              </CardContent>
          </Card>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-[800px]'>
        <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
            <IconStarFilled stroke={1.5} className='text-red-500 size-10' />
            <h1 className='flex font-serif text-4xl'>Quality Focused</h1>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>Delivering premium quality at every step, with no hidden costs, ensuring exceptional value and satisfaction in every project.</span>
              </CardContent>
          </Card>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl items-center justify-center'>
            <CardHeader className='flex items-center justify-center'>
            <IconMoodCrazyHappyFilled stroke={1.5} className='text-red-500 size-10' />
            <h1 className='flex font-serif text-4xl'>Seamless Process</h1>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <span className='text-muted-foreground text-center'>Our streamlined process minimizes your workload, letting you focus on what matters while we handle the heavy lifting efficiently.</span>
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
