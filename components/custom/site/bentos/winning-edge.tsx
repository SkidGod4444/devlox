import { AvatarCircles } from '@/components/magicui/avatar-circles';
import React from 'react'

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
    <div className='flex items-center justify-center h-full w-full'>
      <div className="flex mt-20 px-4 py-2 w-auto mx-auto z-[500] rounded-full border-t-2 border-r border-border/60 border-opacity-80 m-3 bg-gradient-to-br from-secondary/40 to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background dark:border-border shadow-2xl items-center">
        <span className='text-lg mr-2 align-middle'>We use industry level tech stacks</span>
        <AvatarCircles avatarUrls={avatars} />
      </div>
    </div>
  )
}
