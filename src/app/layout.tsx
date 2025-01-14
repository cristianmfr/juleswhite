import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/templates/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JulesWhite",
  description: "Clínica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex flex-col bg-transparent rounded-[22px] backdrop-blur-sm items-center justify-center h-[100px]">
          <NavigationMenuDemo />
        </header>
        {children}
        {/* <footer className="flex flex-col w-full h-[200px] mt-8">
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}
