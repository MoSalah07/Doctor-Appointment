"use client";
import React from "react";
import CardDoctor from "../doctors/CardDoctor";
import { StoreCTX } from "@/context/StoreProvider";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

function Doctors() {
  const { doctors } = StoreCTX();
  const { push } = useRouter();

  return (
    <div className="main-container pt-8 text-center">
      <div>
        <h3 className="text-xl xsm:text-3xl font-semibold text-gray-800">
          Top Doctors to Book
        </h3>
        <p className="my-4 w-full xsm:w-[90%] md:w-[50%] lg:w-[35%] mx-auto">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {doctors &&
          doctors
            .slice(0, 10)
            .map((doctor) => <CardDoctor key={doctor._id} {...doctor} />)}
      </div>
      <div className="my-20">
        <Button
          onClick={() => {
            push(`/doctors`);
            scrollTo(0, 0);
          }}
          className="bg-blue-100 text-gray-600 font-bold capitalize tracking-widest py-2 px-8 rounded-3xl"
        >
          more
        </Button>
      </div>
    </div>
  );
}

export default Doctors;
