import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

export default function OfferingsCards() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className="flex flex-col mt-20 w-auto mx-auto z-[500] rounded-4xl border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-[800px]'>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl'>
            <CardHeader>
              {/* <Image src={"/icons/globe.png"} alt='icon' height={50} width={50} className='text-white bg-white'/> */}
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl'>
            ok
          </Card>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-[800px]'>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl'>
            ok
          </Card>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl'>
            ok
          </Card>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center p-5 w-[800px]'>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl'>
            ok
          </Card>
          <Card className='flex md:h-[300px] h-[150px] md:w-[500px] w-[250px] rounded-2xl'>
            ok
          </Card>
        </div>
      </div>
    </div>
  )
}
