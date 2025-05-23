import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="sticky z-[300] border-y px-4 sm:px-8 md:px-12 overflow-hidden w-full pb-20 md:pb-0">
      <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8 lg:px-20 py-8 relative">
        <div className="flex flex-col items-center text-center">
          <p className="text-base sm:text-lg max-w-lg">
            We help ideas become reality.
          </p>
          <p className="text-base sm:text-lg max-w-lg">
            Book a 15-min call with us to discuss your ideas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 w-full sm:w-auto">
          <Link href={"#book"} className="w-full sm:w-auto">
            <Button size={"lg"} className="cursor-pointer w-full sm:w-auto">
              Book a 15-min Call
            </Button>
          </Link>
          <Link href={"https://l.devwtf.in/wp"} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button variant="default" size="lg" className='cursor-pointer w-full sm:w-auto'>
              Chat on WhatsApp
            </Button>
          </Link>
        </div>
        <p className="text-base sm:text-lg max-w-lg text-center">
          For inquiries, reach us at {" "}
          <Link href={"mailto:connect.saidev@gmail.com"} className="text-muted-foreground underline cursor-pointer">
            connect.saidev@gmail.com
          </Link>
        </p>
      </div>
    </footer>
  );
}