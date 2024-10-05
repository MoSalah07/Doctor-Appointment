import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import appointment_img from "@/assets/assets_frontend/appointment_img.png";

function Promo() {
  return (
    <div className="mt-16 mb-8 w-full h-[45vh] relative">
      <div className="bg-main-color text-white w-full h-full p-8 rounded-lg flex items-center justify-between">
        <div>
          <h3
            style={{ lineHeight: 1.3 }}
            className="md:text-2xl lg:text-4xl xl:text-5xl font-bold"
          >
            {" "}
            Book Appointment <br /> With 100+ Trusted Doctors
          </h3>
          <Button
            className="w-[120px] xsm:w-[150px]"
            sx={{
              bgcolor: "white",
              textTransform: "capitalize",
              mt: 2,
              borderRadius: 50,
            }}
          >
            Create Account
          </Button>
        </div>
        <div>
          <Image
            src={appointment_img}
            alt="appointment"
            priority
            className="w-[150px] xsm:w-[250px] sm:w-[300px] lg:w-[340px] xl:w-[350px] absolute bottom-0 right-0 sm:right-12 xl:right-16"
          />
        </div>
      </div>
    </div>
  );
}

export default Promo;
