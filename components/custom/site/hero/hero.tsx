import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <section className='flex flex-col z-50 mt-16 md:mt-32 items-center justify-center h-full w-full px-4 sm:px-6'>
      <div className='items-center justify-center w-full max-w-[900px] relative'>
        <Image
          src="/imgs/hero/hand.png"
          alt='strike'
          draggable={false}
          height={150}
          width={150}
          className='absolute top-20 -left-10 sm:-left-60 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px]'
        />
        <h1 className='text-3xl sm:text-6xl font-bold line-clamp-3 text-center py-5'>
          Revitalize Your Digital Impact through  Boundless Creativity
          <span className="relative inline-block">
            <Image src="/imgs/hero/strike.png" alt='strike' draggable={false} height={30} width={30} className='absolute -top-4 left-1 sm:top-0 sm:left-0' />
          </span>
        </h1>
        <Image
          src="/imgs/hero/heart.png"
          alt='strike'
          draggable={false}
          height={150}
          width={150}
          className='absolute -top-10 -right-10 sm:-right-50 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px]'
        />
      </div>

      <span className='text-sm sm:text-xl line-clamp-3 w-full max-w-[900px] mt-2 text-center text-muted-foreground px-2'>
        I am a passionate and experienced web developer, dedicated to creating visually stunning and highly functional websites.
      </span>

      <div className='relative flex mt-10 flex-col sm:flex-row items-center gap-4 sm:gap-5'>
        <Image
          src="/imgs/hero/arrow.png"
          alt='strike'
          draggable={false}
          height={150}
          width={150}
          className='absolute -top-6 -left-10 sm:left-[-160px] w-[60px] h-[60px] sm:w-[150px] sm:h-[150px]'
        />
        <Link href={"#book"} className="w-full sm:w-[220px]">
          <Button size="lg" className='cursor-pointer font-sans bg-red-500 text-white hover:bg-red-500 w-full sm:w-[220px]'>
            Let&apos;s Work Together
          </Button>
        </Link>

        <Link href={"https://l.devwtf.in/wp"} target="_blank" rel="noreferrer" className="w-full sm:w-[220px]">
          <Button variant="default" size="lg" className='cursor-pointer w-full sm:w-[220px]'>
            Chat on WhatsApp
          </Button>
        </Link>
      </div>
    </section>
  )
}