import Image from "next/image";
import React from "react";
import logo from "@/assets/assets_frontend/logo.svg";

function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="h-[25vh] mt-40">
      <div className="main-container">
        {/* First Col */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={logo}
                alt="image-footer"
                priority
                className="w-[150px]"
              />
            </div>
            <p className="text-sm font-normal leading-[2rem] text-justify text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center justify-center capitalize">
            <h4 className="text-center mr-10 mb-3 lg:mb-6 text-lg font-bold uppercase text-gray-800">
              company
            </h4>
            <ul className="grid gap-2 text-gray-600">
              <li>home</li>
              <li>about us</li>
              <li>delivery</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center lg:block mt-8 lg:mt-0">
            <h4 className="text-left mr-10 lg:mr-0 mb-3 lg:mb-6 text-lg font-bold uppercase text-gray-800">
              get in touch
            </h4>
            <ul className="grid gap-2 text-gray-600">
              <li>+0-000-000-000</li>
              <li>mohamedsalah@gmail.com</li>
            </ul>
          </div>
        </div>
        {/* Second Col */}
        <div className="text-center mt-20 pb-8 text-sm font-semibold text-gray-800">
          Copyright {getYear} @ MohamedSalah.dev - All Right Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
