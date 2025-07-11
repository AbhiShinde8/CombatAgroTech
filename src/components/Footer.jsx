import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto p-4 text-center flex flex-col gap-2 lg:flex-row lg:justify-between">
        <p>All Rights Reserved 2025</p>
        <div className="flex gap-4 items-center justify-center text-2xl">
          <a href="" className="hover:text-yellow-400">
            <FaFacebook />
          </a>
          <a href="" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
