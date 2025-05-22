import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="sticky z-[300] border-y px-8 md:px-12 overflow-hidden w-full pb-20 md:pb-0">
      <div className="flex flex-col items-center justify-center gap-2 sm:px-8 lg:px-20 py-8 relative">
        <div className="flex flex-col items-center">
          <p className="text-lg max-w-lg">
            We help ideas become reality.
          </p>
          <p className="text-lg max-w-lg">
            Book a 15-min call with us to discuss your ideas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
        <Link href={"#book"}>
          <Button size={"lg"} className="cursor-pointer">
            Book a 15-min Call
          </Button>
        </Link>
        <Link href={"https://l.devwtf.in/wp"} target="_blank" rel="noreferrer">
          <Button variant="default" size="lg" className='cursor-pointer'>
            Chat on WhatsApp
          </Button>
          </Link>
        </div>
        <p className="text-lg max-w-lg">
          For inquiries, reach us at {" "}
          <Link href={"mailto:connect.saidev@gmail.com"} className="text-muted-foreground underline cursor-pointer">
            connect.saidev@gmail.com
          </Link>
        </p>
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" /> */}
      </div>
    </footer>
  );
}