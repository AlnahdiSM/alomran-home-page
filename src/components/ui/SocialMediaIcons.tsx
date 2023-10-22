import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

export default function SocialMediaIcons() {
  return (
    <div className="hidden md:flex gap-4 items-end justify-center  ">
      {/* Adjust the size using Tailwind CSS classes */}
      <FiYoutube className="text-xl" />
      <FaInstagram className="text-xl" />
      <SlSocialLinkedin className="text-xl " />
      <FaXTwitter className="text-xl" />
      <FiFacebook className="text-xl" />
    </div>
  );
}
