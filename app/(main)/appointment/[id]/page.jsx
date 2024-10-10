"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { StoreCTX } from "@/context/StoreProvider";

import ContentAppointmentDetails from "./components/ContentAppointmentDetails";
import AppointmentsDate from "./components/AppointmentsDate";
import RelatedDoctors from "./components/RelatedDoctors";

function AppointmentDetailsIdPage() {
  const { id } = useParams();
  const { doctors } = StoreCTX();
  const [docSlots, setDocSlots] = useState([]);
  const [docIndex, setDocIndex] = useState(0);
  const [docTime, setDocTime] = useState("");

  const currentSingleDoctor =
    doctors && doctors.find((item) => item._id === id);

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // Getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // add slots in array
        timeSlots.push({
          dataTime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [currentSingleDoctor, id]);

  return (
    <div className="main-container mt-8">
      <ContentAppointmentDetails currentSingleDoctor={currentSingleDoctor} />
      <AppointmentsDate
        docSlots={docSlots}
        docIndex={docIndex}
        docTime={docTime}
        setDocTime={setDocTime}
        setDocIndex={setDocIndex}
      />
      <RelatedDoctors docId={id} speciality={currentSingleDoctor.speciality} />
    </div>
  );
}

export default AppointmentDetailsIdPage;
