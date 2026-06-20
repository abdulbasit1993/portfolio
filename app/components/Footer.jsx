import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          abasitm.1993@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {currentYear} Abdul Basit Mehtab. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/abdulbasit1993">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/abdulbasit1993">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/abasitm1993">
              X / Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
