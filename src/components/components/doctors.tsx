import DoctorCard from "../templates/doctor-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Doctors() {
  const doctors = [
    {
      name: "Dra Vickie White",
      specialty: "Ginecologista e Reprodução Humana",
      instagram: "dra.vickiewhite",
    },
    {
      name: "Dra Camila Poncio",
      specialty: "Especialista em Reprodução Humana",
      instagram: "dra.camilaponcio",
    },
    {
      name: "Dr. João Thomaz",
      specialty: "Andrologista",
      instagram: "dr.joaothomaz",
    },
    {
      name: "Dr. Idelio Sterza",
      specialty: "Ginecologista e Obstetra",
      instagram: "idelio_sterza",
    },
    {
      name: "Dr. Paulo César Pitanga",
      specialty: "Anestesista",
      instagram: "dra.vickiewhite",
    },
    {
      name: "Dr. Andrei Vargas",
      specialty: "Anestesista",
      instagram: "-",
    },
    {
      name: "Juliana Torres",
      specialty: "Psicóloga",
      instagram: "julianatorrespsi",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start justify-center gap-4 p-8">
      <span className="text-2xl font-bold text-foreground ml-10">
        Conheça nossos Doutores
      </span>
      <span className="text-sm font-normal text-foreground/70 ml-10 w-1/2">
        Sabemos da importância de ter profissionais capacitados em áreas
        diversas para fazer diferença na jornada da reprodução humana e
        influenciar diretamente os resultados.
      </span>
      <div className="flex items-center justify-center w-full h-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[95%]"
        >
          <CarouselContent>
            {doctors.map((doctor, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <DoctorCard
                    name={doctor.name}
                    specialty={doctor.specialty}
                    instagram={doctor.instagram}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
