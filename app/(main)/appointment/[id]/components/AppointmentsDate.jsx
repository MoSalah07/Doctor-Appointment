import { Button } from "@mui/material";
import React from "react";

function AppointmentsDate({
  docSlots,
  docIndex,
  setDocIndex,
  docTime,
  setDocTime,
}) {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="mt-8">
      <div>
        <h3 className="text-gray-500 text-center text-lg font-semibold">
          Booking slots
        </h3>
        <div className="grid lg:grid-cols-5 mt-6">
          <div className="lg:col-span-2"></div>
          <div className="lg:col-span-3 overflow-x-scroll category-speciality">
            <div className="flex items-center gap-4 overflow-x-scroll category-speciality">
              {docSlots.length &&
                docSlots.map((item, idx) => (
                  <div
                    onClick={() => setDocIndex(idx)}
                    key={idx}
                    className={`flex flex-col justify-center items-center border p-4 rounded-lg cursor-pointer ${
                      docIndex === idx
                        ? "bg-main-color text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <p>{item[0] && daysOfWeek[item[0].dataTime.getDay()]}</p>
                    <p>{item[0] && item[0].dataTime.getDate()}</p>
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4 category-speciality">
              {docSlots.length &&
                docSlots[docIndex].map((item, idx) => (
                  <p
                    onClick={() => setDocTime(item.time)}
                    key={idx}
                    className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                      item.time === docTime
                        ? "bg-main-color text-white"
                        : "text-gray-400 border border-gray-300"
                    }`}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>
            <div className="mt-8">
              <Button
                type="button"
                className="bg-main-color text-white px-8 rounded-full"
              >
                book an appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentsDate;
