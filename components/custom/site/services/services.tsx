import React from 'react'
import ServicesCard from '../bentos/services-card'
import ProjShowcaseSm from '../projects/small/showcase-sm'

export default function ServicesComp() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <h1 className='flex text-4xl sm:text-7xl font-serif text-center'>Our Services</h1>
      <ServicesCard/>
      <div className='flex mt-20 md:mt-30'>
      <ProjShowcaseSm/>
      </div>
    </div>
  )
}
