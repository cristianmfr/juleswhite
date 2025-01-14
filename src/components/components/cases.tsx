import { Quote } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { HoverMotion } from "../templates/hover-anim";

export default function Cases() {
  return (
    <div className="flex flex-col w-full items-start justify-center p-8">
      <div className="grid grid-cols-3 gap-4 w-full bg-foreground p-8 rounded-[22px] drop-shadow-[0_20px_20px_#D8B6AB] drop-shadow-primary">
        <div className="col-span-1 flex flex-col items-start justify-center gap-4">
          <HoverMotion>
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>
                  <Quote className="w-8 h-8" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start justify-center gap-2">
                  <span className="text-sm">
                    Foi uma jornada maravilhosa. Ter encontrado a Jules White
                    fez toda a diferença na realização de nosso sonho!
                  </span>
                  <span className="text-sm font-semibold">
                    Bebê Heloísa e Família
                  </span>
                  <div className=" flex flex-col bg-[url('/case-1.png')] bg-cover bg-center border-2 border-primary shadow-lg w-full h-[300px] rounded-lg" />
                </div>
              </CardContent>
            </Card>
          </HoverMotion>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-4">
          <HoverMotion>
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>
                  <Quote className="w-8 h-8" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start justify-center gap-2">
                  <span className="text-sm">
                    Foi uma jornada maravilhosa. Ter encontrado a Jules White
                    fez toda a diferença na realização de nosso sonho!
                  </span>
                  <span className="text-sm font-semibold">
                    Bebê Rita e sua Família
                  </span>
                  <div className=" flex flex-col bg-[url('/case-2.png')] bg-cover bg-center border-2 border-primary shadow-lg w-full h-[300px] rounded-lg" />
                </div>
              </CardContent>
            </Card>
          </HoverMotion>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-4">
          <HoverMotion>
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>
                  <Quote className="w-8 h-8" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start justify-center gap-2">
                  <span className="text-sm">
                    A Jules White nos mostrou o caminho possível para nós, sem
                    enganação. E nossa opção foi a barriga de aluguel. Foi tudo
                    maravilhoso!
                  </span>
                  <span className="text-sm font-semibold">
                    Don Francis, Tech Lead
                  </span>
                  <div className=" flex flex-col bg-[url('/case-3.png')] bg-cover bg-center border-2 border-primary shadow-lg w-full h-[300px] rounded-lg" />
                </div>
              </CardContent>
            </Card>
          </HoverMotion>
        </div>
      </div>
    </div>
  );
}
