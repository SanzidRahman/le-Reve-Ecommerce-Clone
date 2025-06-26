// import { HeroImage } from "@/lib";
import { HeroImage } from "@/lib";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-green-100 ">
      {HeroImage.map((item) => (
        <div key={item.id} className="relative flex justify-center z-111 h-[600px] bg-green-100  ">
          <Image
            alt={item.image}
            src={item.image}
            height={500}
            width={500}
            className=" object-contain"
          />
        </div>
      ))}
    </div>

    // <div>
    //   <div className="relative top-40 h-[500px] bg-amber-300">
    //     <Image
    //     src={sanzid}
    //     alt="sanzid"
    //     fill
    //     sizes="100vw"
    //     style={{ width : "100%", objectFit : "fill"}}
    //     />
    //   </div>
    // </div>
  );
};

export default HeroSection;
