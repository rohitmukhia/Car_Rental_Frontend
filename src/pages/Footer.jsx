import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Browsw Cars", "List Your Car", "About us"],
    },
    {
      title: "Need Help?",
      links: ["Help Center", "Terms of Service", "Privacy Policy", "Insurance"],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500 ">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-5 border-b border-gray-500/30 text-gray-500">
        <div>
          <img
            className="w-34 md:w-45"
            src={assets.logo}
            alt="dummyLogoColored"
          />
          <p className="max-w-[320px] mt-2 text-[14px]">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © <a href="https://rentcar.com">RentCar</a> All Right
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
