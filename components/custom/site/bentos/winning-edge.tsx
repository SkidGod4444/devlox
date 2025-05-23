import { AvatarCircles } from '@/components/magicui/avatar-circles';
import React from 'react'
import OfferingsCards from './offerings';

const avatars = [
    {
      imageUrl: "/icons/supabase.png",
      profileUrl: "https://supabase.com/",
    },
    {
        imageUrl: "/icons/redis.png",
        profileUrl: "https://upstash.com/",
      },
      {
        imageUrl: "/icons/expo.png",
        profileUrl: "https://expo.dev/",
      },
    {
        imageUrl: "/icons/turborepo.png",
      profileUrl: "https://turbo.build/",
    },
    {
        imageUrl: "/icons/nextjs.png",
      profileUrl: "https://nextjs.org/",
    },
  ];

export default function WinningEdge() {
  return (
    <div className='flex z-[500] flex-col items-center justify-center h-full w-full px-4 sm:px-8'>
      <div className="md:max-w-full max-w-[90%] flex mt-10 mb-5 md:mb-15 px-4 py-1 w-auto mx-auto rounded-full border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        <span className='text-lg md:text-lg mr-2 align-middle'>We use industry level tech stacks</span>
        <div className='hidden md:flex items-center justify-center'>
        <AvatarCircles avatarUrls={avatars} />
        </div>
      </div>
      <h1 className='flex text-3xl sm:text-7xl font-serif text-center mt-4 sm:mt-0'>Our Winning Edge</h1>
      <span className='text-sm sm:text-xl line-clamp-3 w-full max-w-[90%] sm:max-w-[900px] mt-3 sm:mt-5 text-center text-muted-foreground'>
      Discover our unique strength and distinctive value we offer
      </span>
      <OfferingsCards/>
    </div>
  )
}
