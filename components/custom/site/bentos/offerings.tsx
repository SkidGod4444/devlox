import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import {
  IconDeviceDesktopAnalytics,
  IconMoodCrazyHappyFilled,
  IconScale,
  IconStarFilled,
  IconTimeDuration45,
  IconWorldWww
} from '@tabler/icons-react'

export default function OfferingsCards() {
  return (
    <div className='flex items-center justify-center h-full w-full px-4'>
      <div className="flex flex-col mt-20 w-auto mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        
        {[ // Array of card rows
          [
            {
              icon: <IconWorldWww stroke={1.5} className='text-red-500 size-8 sm:size-10' />,
              title: 'SEO Optimized',
              desc: 'Boost your online presence with SEO-first designs that drive traffic, enhance search rankings, and attract potential customers effectively.'
            },
            {
              icon: <IconDeviceDesktopAnalytics stroke={1.5} className='text-red-500 size-8 sm:size-10' />,
              title: 'Peak Performance',
              desc: 'Experience lightning-fast load times, smooth interactions, and seamless performance on all devices, ensuring an engaging user journey.'
            },
          ],
          [
            {
              icon: <IconTimeDuration45 stroke={1.5} className='text-red-500 size-8 sm:size-10' />,
              title: 'Fast Turnaround',
              desc: 'Achieve a market-ready MVP within 7 to 14 days, blending speed and quality to capitalize on business opportunities faster.'
            },
            {
              icon: <IconScale stroke={1.5} className='text-red-500 size-8 sm:size-10' />,
              title: 'Scalable & Robust',
              desc: 'Built with scalability in mind, our solutions adapt to your business growth, offering stability and robustness from the ground up.'
            },
          ],
          [
            {
              icon: <IconStarFilled stroke={1.5} className='text-red-500 size-8 sm:size-10' />,
              title: 'Quality Focused',
              desc: 'Delivering premium quality at every step, with no hidden costs, ensuring exceptional value and satisfaction in every project.'
            },
            {
              icon: <IconMoodCrazyHappyFilled stroke={1.5} className='text-red-500 size-8 sm:size-10' />,
              title: 'Seamless Process',
              desc: 'Our streamlined process minimizes your workload, letting you focus on what matters while we handle the heavy lifting efficiently.'
            },
          ],
        ].map((row, i) => (
          <div key={i} className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-full max-w-[800px]'>
            {row.map((card, j) => (
              <Card key={j} className='flex flex-col min-h-[200px] sm:min-h-[300px] w-full sm:w-[500px] rounded-2xl items-center justify-center'>
                <CardHeader className='flex flex-col items-center justify-center text-center'>
                  {card.icon}
                  <h1 className='font-serif text-xl sm:text-3xl'>{card.title}</h1>
                </CardHeader>
                <CardContent className='flex items-center justify-center'>
                  <span className='text-muted-foreground text-center text-sm sm:text-base'>
                    {card.desc}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}