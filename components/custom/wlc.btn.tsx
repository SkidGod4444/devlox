import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

export default function WlcBtn() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center mb-0 cursor-pointer">
      <div
        className={cn(
          "group px-4 py-2 rounded-full shadow-sm border-t-2 border-r border-border/60 border-opacity-80 bg-background/80 text-base text-white hover:cursor-pointer hover:bg-background/80 border-b",
        )}
      >
        <Button size={"icon"} variant={"secondary"} className='rounded-full mr-2 text-xl'>
            👋🏻
        </Button>
        <span className='text-muted-foreground'>Saidev Welcome&apos;s You</span>
        {/* <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText> */}
      </div>
    </div>
  )
}
