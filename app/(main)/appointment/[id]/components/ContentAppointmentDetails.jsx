import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets_frontend/assets";

function ContentAppointmentDetails({ currentSingleDoctor }) {
  return (
    <div className="grid lg:grid-cols-5 gap-x-4">
      {/* Col_1 */}
      <div className="bg-main-color rounded-lg lg:col-span-2">
        <Image
          src={currentSingleDoctor.image.src}
          alt={currentSingleDoctor.name}
          width={400}
          height={400}
          className="w-auto h-auto"
        />
      </div>
      {/* Col_2 */}
      <div className="bg-white w-[95%] lg:w-full mx-auto lg:mx-0 -mt-16 lg:mt-0 lg:col-span-3 border border-gray-300 rounded-lg p-4 md:p-8">
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl sm:text-3xl font-normal">
            {currentSingleDoctor.name}
          </h2>
          <Image
            src={assets.verified_icon}
            alt="verified"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="flex items-center mt-2 text-gray-500 text-sm sm:text-base">
          <p>{currentSingleDoctor.degree}</p>
          <span className="mx-1">-</span>
          <p>{currentSingleDoctor.speciality}</p>
          <p className="ml-2 border border-gray-200 text-[11px] font-semibold rounded-xl py-[2px] px-1">
            {currentSingleDoctor.experience}
          </p>
        </div>
        <div className="mt-4 capitalize flex items-center gap-x-1">
          <h5 className="text-gray-900">about</h5>
          <div className=" w-2 sm:w-3 h-2 sm:h-3">
            <Image
              src={assets.info_icon}
              alt="about"
              height={20}
              width={20}
              className="w-2 sm:w-3 h-2 sm:h-3"
              priority
            />
          </div>
        </div>
        <div className="text-gray-500 mt-3 md:mt-2 text-justify text-sm">
          {currentSingleDoctor.about}
        </div>
        <div className="mt-3 text-gray-600 font-semibold">
          <span>Appointment fee:</span>
          <span className="ml-1">${currentSingleDoctor.fees}</span>
        </div>
      </div>
    </div>
  );
}

export default ContentAppointmentDetails;
