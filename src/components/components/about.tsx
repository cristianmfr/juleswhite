import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full items-start justify-center px-12">
      <div className="grid grid-cols-2 w-full py-4">
        <div className="col-span-1 flex flex-col items-center justify-center gap-4">
          <Image
            src="/medic-badge.png"
            alt="About"
            width={400}
            height={400}
            className="drop-shadow-[10px_10px_20px_#D3AA9C] drop-shadow-primary rounded-[22px]"
          />
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            Nossa história
          </span>
          <span className="text-sm text-gray-500 font-normal">
            A clínica Jules White é referência no Brasil em reprodução humana e
            está no mercado desde 1994. Estamos aqui para guiá-lo(a) em sua
            jornada com as melhores soluções que a ciência pode oferecer.
          </span>
          <span className="text-sm text-gray-500 font-normal">
            Você pode conhecer mais sobre nós ao longo desta página. Mas se
            preferir fazer contato imediato, basta clicar no botão abaixo e
            conversar com a gente no Whatsapp.
          </span>
        </div>
      </div>
    </div>
  );
}
