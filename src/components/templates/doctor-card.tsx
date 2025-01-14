import Link from "next/link";
import { Card, CardContent } from "../ui/card";

interface DoctorCardProps {
  name: string;
  specialty: string;
  instagram: string;
}

export default function DoctorCard({
  name,
  specialty,
  instagram,
}: DoctorCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col w-full h-full items-start justify-center gap-2">
        <div className="flex flex-col w-full h-[350px] items-start justify-center gap-2 p-2">
          <div className="flex flex-col w-full h-4/5"></div>
          <div className="flex flex-col w-full h-1/5">
            <span className="text-md text-foreground font-bold">{name}</span>
            <span className="text-sm text-foreground font-normal">
              {specialty}
            </span>
            <Link
              href={`https://www.instagram.com/${instagram}`}
              className="text-sm text-primary font-normal hover:text-primary"
            >
              @{instagram}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
