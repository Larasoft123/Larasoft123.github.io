import { Marquee } from "@/components/magicui/marquee"
import type { Tecnologies } from "@/types/tecnologiesType";
import { SkillCard } from "./SkillCard";

export function SkillSlider({ Row }: { Row: Tecnologies[], }) {

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {Row.map(({ image, name }) => (
          <SkillCard key={name} name={name} image={image} />
          
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-sky-950/15 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-sky-950/15"></div>
    </div>
  );
}