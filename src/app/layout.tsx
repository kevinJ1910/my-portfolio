import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LiquidBackground from "@/components/ui/LiquidBackground"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: { 
    default: "Kevin Jordan | Frontend Developer", 
    template: "%s | Kevin Jordan" 
  },
  description: "Portfolio of Kevin Jordan, a Frontend Developer student at Universidad del Valle, Cali, Colombia. Specialized in React, Next.js and TypeScript.",
  keywords: ["Kevin Jordan", "Frontend Developer", "Sistems Engineer", "Portfolio", "React", "Next.js", "TypeScript", "Universidad del Valle", "Cali", "Colombia"],
  authors: [{ name: "Kevin Jordan" }],
  creator: "Kevin Jordan",
  openGraph: {
    type: "website",
    locale: "en_CO",
    title: "Kevin Jordan | Frontend Developer",
    description: "Frontend Developer Portfolio",
    siteName: "Kevin Jordan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Jordan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Jordan | Frontend Developer",
    description: "Frontend Developer Portfolio",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LiquidBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}