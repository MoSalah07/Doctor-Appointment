import Image from "next/image";
import React from "react";
import ImageContact from "@/assets/assets_frontend/contact_image.png";

function ContactPage() {
  return (
    <div className="main-container">
      <h2 className="text-center my-16 text-xl uppercase text-gray-500">
        contact us
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-16">
        <div className="sm:basis-[45%] lg:basis-[30%]">
          <Image src={ImageContact} />
        </div>
        <div className="flex flex-col gap-y-6 mt-12 sm:mt-0">
          <h3 className="font-bold text-gray-500">OUR OFFICE</h3>
          <div className="text-gray-700">
            <p>00000 Willms Station</p>
            <p>Suite 000, Washington, USA</p>
          </div>
          <div className="text-gray-700">
            <p>Tel: (000) 000-0000</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>
          <p className="font-bold text-gray-500">CAREERS AT PRESCRIPTO</p>
          <p className="text-gray-700">
            Learn more about our teams and job openings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
