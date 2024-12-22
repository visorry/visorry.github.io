import Image from "next/image";
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import { LucideSend, LucideGithub, LucideExternalLink } from "lucide-react";

const Viscape = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden group">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          {/* Image Container */}
          <div className="absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg group-hover:scale-105 group-hover:blur-sm transition-all duration-300">
            <Image
              src={"/projects/viscape.png"}
              alt={"Viscape visa booking app page example"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project at</span>
            <span className="flex gap-1">Freelance</span>
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Viscape.ai - Visa Booking App
            </h1>
            <LucideSend />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Next.js
            </Badge>
            <Badge variant="default" className="text-xs">
              tRPC
            </Badge>
            <Badge variant="default" className="text-xs">
              Prisma
            </Badge>
            <Badge variant="default" className="text-xs">
              Tailwind CSS
            </Badge>
            <Badge variant="default" className="text-xs">
              AWS
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Viscape;
