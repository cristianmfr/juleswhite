import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col w-full h-full bg-white p-8">
      <div className="grid grid-cols-8 w-full h-full">
        <div className="col-span-2 flex flex-col w-full gap-4">
          <span className="text-sm">Logo</span>
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
