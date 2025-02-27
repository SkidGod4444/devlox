"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <div className="mr-8">
      {/* <Logo/> */}
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
        <Link
          href="/"
          className={cn(
            "flex flex-row items-center gap-2 transition-colors hover:text-foreground/80",
            pathname === "/"
              ? "text-foreground rounded-xl bg-background py-2 px-4"
              : "text-foreground/60",
          )}
        >
          <Image src={"/icons/home.png"} alt="icon" height={16} width={16} className="align-middle"/>
          <span className="align-middle">Home</span>
        </Link>
        <Link
          href="/works"
          className={cn(
            "flex flex-row items-center gap-2 transition-colors hover:text-foreground/80",
            pathname?.startsWith("/works")
              ? "text-foreground rounded-xl bg-background py-2 px-4"
              : "text-foreground/60",
          )}
        >
          <Image src={"/icons/fire.png"} alt="icon" height={16} width={16} className="align-middle"/>
          <span className="align-middle">Works</span>
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "flex flex-row gap-2 transition-colors hover:text-foreground/80",
            pathname?.startsWith("/pricing")
              ? "text-foreground rounded-xl bg-background py-2 px-4"
              : "text-foreground/60",
          )}
        >
          <Image src={"/icons/dollar.png"} alt="icon" height={16} width={20} className="align-middle"/>
          <span className="align-middle">Pricing</span>
        </Link>
      </nav>
    </div>
  );
}