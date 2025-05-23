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
        "fixed top-0 left-20 right-20 z-[5000] justify-center transition-all duration-500 ease-in-out rounded-2xl",
        "hidden md:flex"
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
          </div>
        </div>

        <nav className="flex items-center mx-12 bg-white/70 backdrop-blur-md border border-border rounded-full shadow-sm px-3 py-1 transition-all duration-300">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "flex items-center transition-colors px-6 py-2 rounded-full cursor-pointer",
                pathname === "/" ? "text-black bg-white shadow-sm" : "text-muted hover:text-black",
              )}
            >
              <span className="align-middle">Home</span>
            </Link>
            <Link
              href="/works"
              className={cn(
                "flex items-center transition-colors px-6 py-2 rounded-full cursor-pointer",
                pathname?.startsWith("/works")
                  ? "text-black bg-white shadow-sm"
                  : "text-muted hover:text-black",
              )}
            >
              <span className="align-middle">Works</span>
            </Link>
            <Link
              href="/feedbacks"
              className={cn(
                "flex items-center transition-colors px-6 py-2 rounded-full cursor-pointer",
                pathname?.startsWith("/feedbacks") ? "text-black bg-white shadow-sm" : "text-muted hover:text-black",
              )}
            >
              <span className="align-middle">Feedbacks</span>
            </Link>
          </div>
        </nav>

        <div className="flex-shrink-0">
          <Link href={"#book"} className="w-full">
            <Button size="lg" className="w-full cursor-pointer">Book a 15-min Call</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
