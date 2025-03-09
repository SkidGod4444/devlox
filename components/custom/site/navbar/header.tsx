"use client"
import { useEffect, useState } from "react"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const pathname = usePathname()

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-[5000] flex justify-center transition-all duration-500 ease-in-out",
      )}
    >
      <div
        className={clsx(
          "relative flex h-16 items-center justify-between px-6 transition-all duration-500 ease-in-out rounded-3xl",
          isScrolled
            ? "max-w-5xl mx-4 mt-4 border border-border/60 backdrop-blur-lg shadow-md supports-[backdrop-filter]:bg-secondary/50"
            : "w-full shadow-md bg-transparent mx-4 mt-4 transition-all duration-500 ease-in-out",
        )}
      >
        <div className="flex-shrink-0 flex flex-row items-center">
        <div className="flex-shrink-0 flex flex-row items-center w-[150px] rounded-2xl">
          <Image src={"/logoo.png"} height={60} width={60} alt="000" className="rounded-full" draggable={false}/>
          {/* <span className="text-2xl font-semibold ml-1">Devlox</span> */}
        </div>
        </div>

        {/* Centered MainNav */}
        <nav className="flex items-center mx-12">
          <div className="flex items-center rounded-full bg-gray-200 p-1.5 px-2">
            <Link
              href="/"
              className={cn(
                "flex items-center transition-colors px-6 py-2 rounded-full cursor-pointer",
                pathname === "/" ? "text-black bg-white shadow-sm" : " text-muted hover:text-black",
              )}
            >
              <span className="align-middle">Home</span>
            </Link>
            <Link
              href="/redesign"
              className={cn(
                "flex items-center transition-colors px-6 py-2 rounded-full cursor-pointer",
                pathname?.startsWith("/redesign")
                  ? "text-black bg-white shadow-sm"
                  : " text-muted hover:text-black",
              )}
            >
              <span className="align-middle">Redesign</span>
            </Link>
            <Link
              href="/works"
              className={cn(
                "flex items-center transition-colors px-6 py-2 rounded-full cursor-pointer",
                pathname?.startsWith("/works") ? "text-black bg-white shadow-sm" : " text-muted hover:text-black",
              )}
            >
              <span className="align-middle">Works</span>
            </Link>
          </div>
        </nav>

        <div className="flex-shrink-0">
        <Button size="lg" className="w-full">Book a 15-min Call</Button>
        </div>
      </div>
    </header>
  )
}

