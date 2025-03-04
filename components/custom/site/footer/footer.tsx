import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="sticky z-[300] border-y px-8 md:px-12 overflow-hidden w-full">
      <div className="flex flex-col items-center justify-center gap-2 sm:px-8 lg:px-20 py-8">
        <div className="flex flex-col items-center">
        <p className=" text-lg max-w-lg">
          oksokokoe kk knk lokok nmknnknpnn k
        </p>
        <p className=" text-lg max-w-lg">
          oksokokoe
        </p>
        </div>
        <Button size={"lg"}>
            Book a 15-min Call
        </Button>
        <p className=" text-lg max-w-lg">
        For inquiries, reach us at hello@helo
        </p>
        <div className="flex flex-col py-5">
          <p className="inline-flex text-secondary-foreground text-xl">
            Founded by
            <Link
              href={"#"}
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-muted-foreground underline cursor-pointer"
            >
              @SaidevDhal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}