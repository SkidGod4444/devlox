import Image from 'next/image';
import React from 'react';

export default function ProjectsCardsSm({img, width, height}: {img: string, width?: number, height?: number}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[20px] md:w-[300px] lg:w-[400px] xl:w-[450px] rounded-lg overflow-hidden shadow-lg p-1 border-t-2 border-r border-border/60 border-opacity-80bg-gradient-to-br from-background to-muted/60 border bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background">
        <Image 
          src={img || "/demo.png"}
          alt="demo" 
          width={width || 300} 
          height={height || 200} 
          className="w-full h-auto object-cover border-secondary border rounded-lg"
        />
      </div>
    </div>
  );
}