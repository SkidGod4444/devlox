import { NumberTicker } from '@/components/magicui/number-ticker'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'

export default function StacksComp() {
  return (
    <div className='flex flex-col gap-0'>
      {/* Responsive wrapper for button row */}
      <div className="flex mt-20 p-3 w-full max-w-[95%] sm:max-w-[80%] mx-auto z-[500] md:max-w-fit rounded-full border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl overflow-x-auto sm:overflow-visible">
        <div className='flex flex-row items-center gap-5 overflow-x-scroll no-scrollbar'>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              UI/UX Design
          </Button>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              DI/DX Design
          </Button>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              Web Development
          </Button>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              Visual Interactions
          </Button>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              Graphics Design
          </Button>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              Apps Development
          </Button>
          <Button variant={"secondary"} className='rounded-full border-t-2 border-r border-border/60 border-opacity-80 bg-secondary/50 hover:bg-secondary/50'>
              Product Design
          </Button>
        </div>
      </div>

      {/* Responsive statistics grid */}
      <div className='flex flex-wrap justify-center items-center mb-10 gap-y-6'>
        {[{
          value: 6,
          label: 'Completed Projects'
        }, {
          value: 10,
          label: 'Happy Customers'
        }, {
          value: 5,
          label: 'Years of Experience'
        }, {
          value: 4,
          label: 'Recognition Recived'
        }].map(({ value, label }, index) => (
          <div key={index} className='rounded-2xl px-3 py-3 w-[250px] border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl'>
            <CardContent className='flex flex-row'>
              <NumberTicker
                value={value}
                decimalPlaces={0}
                className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white"
              />
              <Plus className='size-8 text-red-500' />
            </CardContent>
            <CardFooter className='text-muted-foreground'>
              <p>{label}</p>
            </CardFooter>
          </div>
        ))}
      </div>
    </div>
  )
}