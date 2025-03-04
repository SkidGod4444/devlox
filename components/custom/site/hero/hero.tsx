import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex flex-col z-50 mt-50 items-center justify-center h-full w-full'>
      <div className=' items-center justify-center w-[900px] relative'>
        <Image src="/imgs/hero/hand.png" alt='strike' draggable={false} height={150} width={150} className='absolute top-20 -left-60' />
        <h1 className='text-6xl font-bold line-clamp-3 text-center py-5'>Revitalize Your Digital Impact through  Boundless Creativity
          <Image src="/imgs/hero/strike.png" alt='strike' draggable={false} height={30} width={30} className='absolute top-0 left-0' />
        </h1>
        <Image src="/imgs/hero/heart.png" alt='strike' draggable={false} height={150} width={150} className='absolute -top-20 -right-50' />
      </div>
      <span className='text-xl line-clamp-3 w-[900px] mt-2 text-center text-muted-foreground'> {/* Reduced margin-top */}
        I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action
      </span>

      <div className='relative flex mt-10'> {/* Reduced margin-top */}
        <Image 
          src="/imgs/hero/arrow.png" 
          alt='strike' 
          draggable={false} 
          height={150} 
          width={150} 
          className='absolute -top-6 left-[-160px]' 
        />
        <div className='flex z-50 items-center justify-between gap-5'>
          <Button size="lg" className='cursor-pointer font-sans bg-red-500 text-white hover:bg-red-500'>
            Let&apos;s Work Together
          </Button>
          <Button variant="secondary" size="lg" className='cursor-pointer'>
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  )
}
