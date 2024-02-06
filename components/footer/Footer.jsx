import React from "react";
import AboutUs from "./AboutUs";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <div className="bg-[#15161D] p-6 text-white w-full">
        <div className="md:flex md:gap-4 max-w-[1150px] justify-between  mx-auto">
          <AboutUs />
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />
        </div>
      </div>
      <p className="bg-[#15161D] p-4 text-white w-full text-center opacity-95">
        copyright 2024 All right Reserved | This template is made by geodevcodes
      </p>
    </>
  );
};

export default Footer;
