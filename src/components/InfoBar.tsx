"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import location from "../../public/location.svg";
import { IoIosCall,IoIosMail } from "react-icons/io";
import SocialMediaIcons from "./ui/SocialMediaIcons";
import { getInformationBar } from "@/lib/contentful";
export default function InfoBar() {
      

  // useEffect to fetch data when the component mounts
  const [infoBarData, setInfoBarData] = useState({
    location: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInformationBar();
        setInfoBarData(data.items[0].fields);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching informationBar:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      <div className="bg-primary flex border-b-4 shadow-black drop-shadow-lg border border-b-secondary  h-[35px] relative justify-center  md:justify-around items-center  text-white text-[10px] md:text-[13px] pl-5 min-w-md">
        
        <div className="flex justify-center items-center gap-[10px] pl-[5vw]">
          <div className="flex items-center gap-[4px]">
            <p>{infoBarData.location}</p>
            <Image
              src={location}
              alt="location"
              className="w-[13px] md:w-[20px]"
            />
          </div>
          <div className="flex items-center gap-[4px]">
            <p>{infoBarData.email}</p>
            <IoIosMail className="text-xl" />
          </div>
          <div className="flex items-center gap-[4px]">
            <p>{infoBarData.phoneNumber}</p>
            <IoIosCall className="text-xl" />
          </div>
        </div>
        <div className="">
          <SocialMediaIcons />
        </div>
      
      </div>
    </>
  );
}
