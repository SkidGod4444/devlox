"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "fixed top-10 left-0 right-0 z-[5000] flex justify-center transition-all duration-500 ease-in-out"
      )}
    >
      <div
        className={clsx(
          "relative flex h-15 items-center justify-between gap-4 px-4 transition-all duration-500 ease-in-out",
          isScrolled
            ? "w-[50rem] border border-border/60 backdrop-blur-lg rounded-2xl shadow-2xl supports-[backdrop-filter]:bg-secondary/50 dark:border-border"
            : "w-full bg-transparent"
        )}
      >
        <div className="flex-shrink-0 flex flex-row items-center w-[150px] rounded-2xl">
          <Image src={"/logoo.png"} height={60} width={60} alt="000" className="rounded-full" draggable={false}/>
          {/* <span className="text-2xl font-medium ml-0">Devlox</span> */}
        </div>

        {/* Centered MainNav */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-10 bg-secondary rounded-xl p-2 px-10">
            <Link
              href="/"
              className={cn(
                "flex flex-row items-center gap-2 transition-colors hover:text-foreground/80",
                pathname === "/"
                  ? "text-white rounded-xl bg-background py-2 px-4 border border-border shadow-lg"
                  : "text-foreground/60"
              )}
            >
              <span className="align-middle">Home</span>
            </Link>
            <Link
              href="/works"
              className={cn(
                "flex flex-row items-center gap-2 transition-colors hover:text-foreground/80",
                pathname?.startsWith("/works")
                  ? "text-white rounded-xl bg-background py-2 px-4 border border-border shadow-lg"
                  : "text-foreground/60"
              )}
            >
              <span className="align-middle">Works</span>
            </Link>
            <Link
              href="/pricing"
              className={cn(
                "flex flex-row gap-2 transition-colors hover:text-foreground/80",
                pathname?.startsWith("/pricing")
                  ? "text-white rounded-xl bg-background py-2 px-4 border border-border shadow-lg"
                  : "text-foreground/60"
              )}
            >
              <span className="align-middle">Pricing</span>
            </Link>
          </div>
        </nav>

        <div className="flex-shrink-0 w-[150px]">
          <Button size="lg" className="w-full">Book a 15-min Call</Button>
        </div>
      </div>
    </header>
  );
}