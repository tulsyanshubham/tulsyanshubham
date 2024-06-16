import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {Navicons} from '@/assets/assets'
// import { useState } from "react";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Shubham Tulsyan",
  description: "Prsonal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [darkmode, setDarkmode] = useState(false);

  return (
    <html lang="en" className="scroll-smooth dark scrollbar-hide">
      <body className={inter.className}>
        <FloatingNav navItems={Navicons} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
