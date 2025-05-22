import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex flex-col z-50 mt-30 md:mt-50 items-center justify-center h-full w-full px-4 sm:px-6'>
      <div className='items-center justify-center w-full max-w-[900px] relative'>
        <Image
          src="/imgs/hero/hand.png"
          alt='strike'
          draggable={false}
          height={150}
          width={150}
          className='absolute top-20 -left-20 sm:-left-60 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]'
        />
        <h1 className='text-3xl sm:text-6xl font-bold line-clamp-3 text-center py-5'>Revitalize Your Digital Impact through  Boundless Creativity
          <Image src="/imgs/hero/strike.png" alt='strike' draggable={false} height={30} width={30} className='absolute top-0 left-0' />
        </h1>
        <Image
          src="/imgs/hero/heart.png"
          alt='strike'
          draggable={false}
          height={150}
          width={150}
          className='absolute -top-20 -right-20 sm:-right-50 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]'
        />
      </div>

      <span className='text-base sm:text-xl line-clamp-3 w-full max-w-[900px] mt-2 text-center text-muted-foreground px-2'>
        I am a passionate and experienced web developer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action
      </span>

      <div className='relative flex mt-10 flex-col sm:flex-row items-center gap-4 sm:gap-5'>
        <Image
          src="/imgs/hero/arrow.png"
          alt='strike'
          draggable={false}
          height={150}
          width={150}
          className='absolute -top-6 -left-24 sm:left-[-160px] w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]'
        />
        <Link href={"#book"}>
          <Button size="lg" className='cursor-pointer font-sans bg-red-500 text-white hover:bg-red-500 w-[220px]'>
            Let&apos;s Work Together
          </Button>
        </Link>

        <Link href={"https://l.devwtf.in/wp"} target="_blank" rel="noreferrer">
          <Button variant="default" size="lg" className='cursor-pointer w-[220px]'>
            Chat on WhatsApp
          </Button>
        </Link>
      </div>
    </div>
  )
}