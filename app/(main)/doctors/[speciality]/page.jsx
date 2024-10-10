"use client";
import { StoreCTX } from "@/context/StoreProvider";
import { specialityData } from "@/assets/assets_frontend/assets";
import { useRouter, usePathname } from "next/navigation";
import CardDoctor from "@/components/doctors/CardDoctor";
import FilterSpeciality from "../components/FilterSpeciality";

function DoctorSpeciality({ params }) {
  const { doctors } = StoreCTX();
  const { push } = useRouter();
  const pathName = usePathname().split("/")[2];
  const pathNameIsSelected =
    pathName === "General%20physician" ? "General physician" : pathName;

  return (
    <div className="main-container">
      <div className="mt-8">
        <h3 className="font-normal text-gray-800">
          Browse through the doctors specialist.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 mt-4">
          {/* For Big Screen */}
          <div className="md:col-span-1 hidden md:flex flex-col gap-y-3">
            {specialityData.map((item, idx) => (
              <div
                onClick={() => {
                  push(
                    pathNameIsSelected === item.speciality
                      ? `/doctors`
                      : `/doctors/${item.speciality}`
                  );
                }}
                key={idx}
                className={`p-2 border border-gray-400 rounded-lg cursor-pointer ${
                  item.speciality === pathNameIsSelected
                    ? "bg-main-color text-white"
                    : "bg-white text-black"
                }`}
              >
                <span className={`text-sm tracking-wider`}>
                  {item.speciality}
                </span>
              </div>
            ))}
          </div>
          {/* For Small Screen */}
          <FilterSpeciality specialityData={specialityData} />
          <div className="col-span-2 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
            {doctors &&
              doctors
                .filter((item) =>
                  params.speciality === "General%20physician"
                    ? item.speciality === "General physician"
                    : item.speciality === params.speciality
                )
                .map((item, idx) => (
                  <CardDoctor isDoctors key={idx} {...item} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSpeciality;
