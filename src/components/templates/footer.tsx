import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col w-full h-full bg-foreground text-background p-8 rounded-[22px]">
      <div className="grid grid-cols-8 w-full h-full">
        <div className="col-span-2 flex flex-col w-full gap-4 items-start justify-center">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
          <div className="flex flex-row gap-4 items-center justify-between">
            <Phone />
            <Instagram />
            <Facebook />
            <Linkedin />
          </div>
        </div>
        <div className="col-span-2 flex flex-col w-full gap-2">
          <Link href="/" className="text-sm">
            Home
          </Link>
          <Link href="/" className="text-sm">
            Serviços
          </Link>
          <Link href="/" className="text-sm">
            Sobre
          </Link>
          <Link href="/" className="text-sm">
            Contato
          </Link>
        </div>
        <div className="col-span-3 flex flex-col w-full gap-2">
          <Link href="/" className="text-sm">
            Entre em contato para mais informações
          </Link>
          <Link href="/" className="text-sm">
            O que os clientes dizem sobre nossos serviços
          </Link>
        </div>
        <div className="col-span-1 flex flex-col w-full gap-2">
          <Link href="/" className="text-sm">
            Suporte
          </Link>
          <Link href="/" className="text-sm">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
