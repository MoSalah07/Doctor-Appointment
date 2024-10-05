import Image from "next/image";
import React from "react";
import groupProfile from "@/assets/assets_frontend/group_profiles.png";
import landingImage from "@/assets/assets_frontend/header_img.png";

function LandingPage() {
  return (
    <div className="bg-main-color text-white h-[60vh] lg:h-[60vh] w-full rounded-lg px-4 sm:px-8 md:px-12 xl:px-16 relative">
      <div className="flex md:items-center justify-between h-full py-8 xsm:py-14 sm:py-20 md:py-0">
        <div>
          <h2 className=" text-base xsm:text-xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl font-bold w-full sm:w-[75%] lg:w-[55%] lg:leading-[4rem]">
            Book Appointment With Trusted Doctors
          </h2>
          <div className="mt-3 flex flex-col xsm:flex-row items-center gap-4">
            <span>
              <Image
                src={groupProfile}
                width={100}
                height={100}
                priority
                alt="group-profile"
              />
            </span>
            <p className="w-full md:w-[40%] text-center xsm:text-left text-sm font-normal">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center xsm:block">
            <button
              type="button"
              className="bg-white text-gray-900 text-sm tracking-wide px-3 py-2 sm:px-8 sm:py-2 rounded-full capitalize"
            >
              book appointment
            </button>
          </div>
        </div>
        <div className=" w-[160px] xsm:w-[250px] lg:w-[400px] xl:w-[500px] absolute  bottom-6 sm:bottom-14 md:bottom-0 translate-x-1/2 md:translate-x-0 right-1/2 md:right-24">
          <Image
            src={landingImage}
            className="w-full object-cover object-center"
            priority
            alt="header-image"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
