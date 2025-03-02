import React from 'react'
import ServicesCard from '../bentos/services-card'

export default function ServicesComp() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <h1 className='flex text-7xl font-serif'>Our Services</h1>
      <ServicesCard/>
    </div>
  )
}
