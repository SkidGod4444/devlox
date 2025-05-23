
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { SiteHeader } from "@/components/custom/site/navbar/header";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ClickSpark from "@/components/click-spark";
import { SiteFooter } from "@/components/custom/site/footer/footer";
import { MobileBottomNav } from "@/components/custom/site/navbar/mobile.bottom.nav";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devlox Studio | Transforming your Ideas into Apps",
  description: "Devlox Studio is a software development team that specializes in creating innovative and user-friendly applications for various platforms. Our team of experienced developers and designers work closely with clients to bring their ideas to life, ensuring high-quality solutions that meet their needs.",
  keywords: [
    "Devlox Studio",
    "software development",
    "application development",
    "web development",
    "mobile app development",
    "custom software solutions",
    "user-friendly applications",
    "innovative software",
    "software engineering",
    "software design",
    "software development team",
    "software development services",
    "software development agency",
    "software development firm",
    "software development team",
    "software development process",
    "MVP",
    "minimum viable product",
    "MVP development",
    "MVP software",
    "MVP app",
    "MVP design",
    "MVP solutions",
    "MVP team",
    "MVP agency",
    "MVP services",
    "MVP firm",
    "MVP team",
    "MVP process",
    "MVP software development",
    "MVP application development",
    "MVP web development",
    "MVP mobile app development",
    "MVP custom software solutions",
    "MVP user-friendly applications",
    "MVP innovative software",
    "MVP software engineering",
  ],
  authors: [
    {
      name: "Devlox Studio by Saidev",
      url: "https://devwtf.in",
    },
  ],
  creator: "Devlox Studio",
  publisher: "Saidev Dhal",
  openGraph: {
    title: "Devlox Studio | Transforming your Ideas into Apps",
    description: "Devlox Studio is a software development team that specializes in creating innovative and user-friendly applications for various platforms. Our team of experienced developers and designers work closely with clients to bring their ideas to life, ensuring high-quality solutions that meet their needs.",
    url: "https://devlox.devwtf.in",
    siteName: "Devlox Studio",
    images: [
      {
        url: "https://devlox.devwtf.in/og.png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlox Studio | Transforming your Ideas into Apps",
    description: "Devlox Studio is a software development team that specializes in creating innovative and user-friendly applications for various platforms. Our team of experienced developers and designers work closely with clients to bring their ideas to life, ensuring high-quality solutions that meet their needs.",
    images: [
      {
        url: "https://devlox.devwtf.in/og.png",
        width: 1200,
        height: 630,
        alt: `Devlox Studio OG Image`,
      },
    ],
    creator: "@SaidevDhal",
    site: "@devloxstudio",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
        <ScrollProgress/>
        <SiteHeader/>
        <MobileBottomNav/>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-full w-full">
            <div className="md:hidden flex absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="md:hidden flex absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            {children}
            </div>
          </ThemeProvider>
          <SiteFooter/>
          </ClickSpark>
      </body>
    </html>
  );
}
