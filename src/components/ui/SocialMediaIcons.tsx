import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

export default function SocialMediaIcons() {
  return (
    <div className="hidden md:flex gap-4 items-end justify-center  ">
      {/* Adjust the size using Tailwind CSS classes */}
      <a title="Youtube"  href="https://www.youtube.com/@oiscb/featured" target="_blank" rel="noopener"><FiYoutube className="text-xl" /></a>
      <a title="instagram" href="https://www.instagram.com/oiscb/" target="_blank" rel="noopener"><FaInstagram className="text-xl" /></a>
      <a title="linkedin" href="https://ye.linkedin.com/in/%D9%85%D8%B9%D9%87%D8%AF-%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D8%A7%D9%86-%D9%84%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA-%D9%88%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D9%82%D8%AF%D8%B1%D8%A7%D8%AA-oiscb-8b02b61a6" target="_blank" rel="noopener"><SlSocialLinkedin className="text-xl " /></a>
      <a title="Twitter" href="https://twitter.com/OISCB1" target="_blank" rel="noopener"><FaXTwitter className="text-xl"  /></a>
      <a title="Facebook" href="https://www.facebook.com/OISCB" target="_blank" rel="noopener"><FiFacebook className="text-xl" /></a>
    </div>
  );
}
