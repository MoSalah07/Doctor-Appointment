import CardDoctor from "@/components/doctors/CardDoctor";
import { StoreCTX } from "@/context/StoreProvider";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function RelatedDoctors({ docId, speciality }) {
  const { doctors } = StoreCTX();
  const [relDoc, setRelDoc] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="mt-24">
      <div className="text-center">
        <h3 className="text-3xl font-semibold">Related Doctors</h3>
        <p className="text-sm my-4">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {relDoc &&
          relDoc.map((item, idx) => (
            <CardDoctor isDoctors key={idx} {...item} />
          ))}
      </div>
      <div className="mt-16 text-center">
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

export default RelatedDoctors;
