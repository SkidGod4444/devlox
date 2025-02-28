import { NumberTicker } from '@/components/magicui/number-ticker'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'

export default function StacksComp() {
  return (
    <div className='flex flex-col gap-0'>
    <div className="flex mt-20 p-3 w-auto mx-auto z-[500] rounded-full border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl">
      <div className='flex flex-row items-center justify-center gap-5'>
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
    <div className='flex flex-row mb-10 items-center justify-center'>
    <div className='rounded-2xl px-3 py-3 w-[250px] border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl'>
  <CardContent className='flex flex-row'>
  <NumberTicker
      value={6}
      decimalPlaces={0}
      className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white"
    />
    <Plus className='size-8 text-red-500'/>
  </CardContent>
  <CardFooter className='text-muted-foreground'>
    <p>Completed Projects</p>
  </CardFooter>
</div>

<div className='rounded-2xl px-3 py-3 w-[250px] border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl'>
  <CardContent className='flex flex-row'>
  <NumberTicker
      value={10}
      decimalPlaces={0}
      className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white"
    />
    <Plus className='size-8 text-red-500'/>
  </CardContent>
  <CardFooter className='text-muted-foreground'>
    <p>Happy Customers</p>
  </CardFooter>
</div>

<div className='rounded-2xl px-3 py-3 w-[250px] border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl'>
  <CardContent className='flex flex-row'>
  <NumberTicker
      value={5}
      decimalPlaces={0}
      className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white"
    />
    <Plus className='size-8 text-red-500'/>
  </CardContent>
  <CardFooter className='text-muted-foreground'>
    <p>Years of Experience</p>
  </CardFooter>
</div>

<div className='rounded-2xl px-3 py-3 w-[250px] border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl'>
  <CardContent className='flex flex-row'>
  <NumberTicker
      value={4}
      decimalPlaces={0}
      className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white"
    />
    <Plus className='size-8 text-red-500'/>
  </CardContent>
  <CardFooter className='text-muted-foreground'>
    <p>Recognition Recived</p>
  </CardFooter>
</div>
  </div>
  </div>
  )
}
