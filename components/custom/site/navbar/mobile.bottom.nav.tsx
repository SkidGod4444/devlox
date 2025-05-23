"use client";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "lucide-react"
import { usePathname } from "next/navigation"


export function MobileBottomNav() {
    const pathname = usePathname()
  
    return (
      <div className="fixed bottom-4 left-4 right-4 z-[5000] md:hidden flex items-center justify-between bg-white dark:bg-secondary/80 backdrop-blur-md border border-border/40 px-4 py-3 shadow-xl rounded-2xl">
        <div className="flex items-center justify-between w-full max-w-screen-sm mx-auto">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center px-3 py-1 rounded-lg text-xs font-medium transition-colors",
              pathname === "/" ? "bg-muted" : "text-muted-foreground"
            )}
          >
            <span>Home</span>
          </Link>
          <Link
            href="/works"
            className={cn(
              "flex flex-col items-center justify-center px-3 py-1 rounded-lg text-xs font-medium transition-colors",
              pathname?.startsWith("/works") ? "bg-muted" : "text-muted-foreground"
            )}
          >
            <span>Works</span>
          </Link>
          <Link
            href="/feedbacks"
            className={cn(
              "flex flex-col items-center justify-center px-3 py-1 rounded-lg text-xs font-medium transition-colors",
              pathname?.startsWith("/feedbacks") ? "bg-muted" : "text-muted-foreground"
            )}
          >
            <span>Feedbacks</span>
          </Link>
          <Link href={"#book"}>
            <Button size={"sm"} className="text-xs px-4 py-2">
              Book a Meet
            </Button>
          </Link>
        </div>
      </div>
    )
  }