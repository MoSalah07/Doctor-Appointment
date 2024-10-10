"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { specialityData } from "@/assets/assets_frontend/assets";

function Category() {
  return (
    <div className="main-container py-16 text-center">
      <div>
        <h3 className="text-xl xsm:text-3xl font-semibold text-gray-800">
          Find by Speciality
        </h3>
        <p className="my-4 w-full xsm:w-[90%] md:w-[40%] mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex items-center justify-between lg:justify-center gap-6 mt-12 overflow-x-scroll p-8 category-speciality">
        {specialityData.map((special, idx) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            href={`/doctors/${special.speciality}`}
            key={idx}
            className="flex justify-center items-center flex-col gap-y-2 translate-y-0 transition-transform hover:-translate-y-2 duration-500 origin-center"
          >
            <Image
              src={special.image}
              alt={special.speciality}
              className="w-[50px] lg:w-[80px]"
              priority
            />
            <h5 className="text-sm font-normal whitespace-nowrap">
              {special.speciality}
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
