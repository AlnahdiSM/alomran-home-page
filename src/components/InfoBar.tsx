import React from "react";
import Logo from "./ui/Logo";
import Image from "next/image";
import location from "../../public/location.svg";
import SocialMediaIcons from "./ui/SocialMediaIcons";
export default function InfoBar() {
  return (
    <>
      <div className="bg-secondary flex   h-[35px] relative justify-end  lg:justify-center items-center  text-white text-[10px] md:text-[13px] pl-5 min-w-md">
        <div className="absolute right-[2vw] top-0">
          <Logo />
        </div>
        <div className="flex justify-center items-center gap-[10px] pl-[5vw]">
          <div className="flex items-center gap-[4px]">
            <p>mukalla - Hadrmout</p>
            <Image
              src={location}
              alt="location"
              className="w-[13px] md:w-[20px]"
            />
          </div>
          <div className="flex items-center gap-[4px]">
            <p>mukalla - Hadrmout</p>
            <Image
              src={location}
              alt="location"
              className="w-[13px] md:w-[20px]"
            />
          </div>
          <div className="flex items-center gap-[4px]">
            <p>mukalla - Hadrmout</p>
            <Image
              src={location}
              alt="location"
              className="w-[13px] md:w-[20px]"
            />
          </div>
        </div>
        <div className="">
          <SocialMediaIcons />
        </div>
      
      </div>
    </>
  );
}
