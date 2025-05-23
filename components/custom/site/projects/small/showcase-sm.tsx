import { Marquee } from '@/components/magicui/marquee'
import React from 'react'
import ProjectsCards from '../cards'

export default function ProjShowcaseSm() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse className="[--duration:20s]">
        <ProjectsCards img='/demo.png'/>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
    </div>
  )
}
