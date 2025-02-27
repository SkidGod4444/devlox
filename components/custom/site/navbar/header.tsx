"use client";
import { MainNav } from "./nav";

export function SiteHeader() {

  return (
    <header className="fixed top-10 left-120 right-120 w-auto mx-auto z-[500] border border-border/60 bg-secondary/30 backdrop-blur-lg supports-[backdrop-filter]:bg-secondary/50 dark:border-border rounded-2xl shadow-2xl">
      <div className="container flex h-12 max-w-screen-2xl items-center justify-center px-4">
        <div className="flex items-center space-x-4">
          <MainNav />
        </div>
      </div>
    </header>
  );
}