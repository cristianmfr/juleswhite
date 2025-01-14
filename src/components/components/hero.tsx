import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col w-full items-start justify-center px-8 h-[600px] ">
      <div className="grid grid-cols-5 w-full bg-[#C2856F]/10 h-full px-12 rounded-[24px] shadow-2xl shadow-primary/50">
        <div className="col-span-3 flex flex-col items-start justify-center gap-4">
          <span className="text-sm text-gray-700 font-semibold">
            Medicina reprodutiva
          </span>
          <span className="text-[52px] leading-none font-bold text-primary">
            Inovando os cuidados com a saúde reprodutiva
          </span>
          <span className="text-xs text-gray-500 font-normal">
            A clínica Jules White é referência no Brasil em reprodução humana e
            está no mercado desde 1994. Estamos aqui para guiá-lo(a) em sua
            jornada com as melhores soluções que a ciência pode oferecer.
          </span>
        </div>
        <div className="col-span-2 flex flex-col items-end justify-center gap-4">
          <Image
            src="/hero.png"
            alt="Hero"
            width={300}
            height={300}
            className="drop-shadow-[10px_10px_20px_#d8b6ab] drop-shadow-primary"
          />
        </div>
      </div>
    </div>
  );
}
