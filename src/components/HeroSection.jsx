import { HeroImage } from "@/lib";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      {HeroImage.map((item) => (
        <div key={item.id} className="h-auto w-full object-contain ">
          <Image alt={item.image} src={item.image} height={1500} width={1500} />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
