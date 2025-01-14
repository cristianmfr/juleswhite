import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";
export default function Action() {
  return (
    <div className="grid grid-cols-2 p-4">
      <div className="col-span-1 flex flex-col w-full gap-4">
        <div className="flex flex-col w-2/3 gap-2">
          <span className="text-sm font-medium text-foreground">Contato</span>
          <span className="text-[28px] leading-none font-bold text-primary">
            Como a JulesWhite pode te ajudar hoje?
          </span>
          <span className="text-sm">
            Deseja solicitar orçamento, buscar suporte técnico ou tem dúvidas
            sobre nossas soluções?
          </span>
        </div>
        <div className="flex flex-col w-full items-start justify-center">
          <Image
            src="/form-image.png"
            alt="About"
            width={360}
            height={360}
            className="drop-shadow-[0_10px_10px_#D8B6AB] drop-shadow-primary"
          />
        </div>
      </div>
      <div className="col-span-1 flex flex-col w-full gap-4 ">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="flex flex-col w-3/5 gap-2 ">
              <span className="text-md font-bold text-foreground">
                Preencha o formulário para entrar em contato.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col w-full gap-2">
                <Label>Nome</Label>
                <Input placeholder="Nome" />
              </div>
              <div className="flex flex-col w-full gap-2">
                <Label>Email</Label>
                <Input placeholder="Email" />
              </div>
              <div className="flex flex-col w-full gap-2">
                <Label>Telefone</Label>
                <Input placeholder="Telefone" />
              </div>
              <div className="flex flex-col w-full gap-2">
                <Label>Mensagem</Label>
                <Textarea
                  placeholder="Mensagem"
                  className="h-[100px] resize-none"
                />
              </div>
              <Button className="w-full">Enviar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
