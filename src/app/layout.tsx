import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/templates/navbar";
import { Footer } from "@/components/templates/footer";
import Image from "next/image";

const quicksand = Quicksand({
  variable: "--font-quicksand",
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
      <body className={`${quicksand.className} antialiased`}>
        <header className="flex bg-transparent rounded-[22px] backdrop-blur-sm items-center justify-center h-[100px]">
          <Image
            src="/logo-fancy.png"
            alt="Logo"
            width={150}
            height={150}
            className="-ml-[100px]"
          />
          <NavigationMenuDemo />
        </header>
        {children}
        <footer className="flex flex-col w-full h-[200px] mt-8 p-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
