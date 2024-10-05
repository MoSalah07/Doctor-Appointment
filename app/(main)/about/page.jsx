import Image from "next/image";
import React from "react";
import ImageAbout from "@/assets/assets_frontend/about_image.png";

const list = [
  {
    id: 1,
    title: "EFFICIENCY:",
    description:
      "Streamlined appointment scheduling that fits into your busy lifestyle.",
  },
  {
    id: 2,
    title: "CONVENIENCE:",
    description:
      "Access to a network of trusted healthcare professionals in your area.",
  },
  {
    id: 3,
    title: "PERSONALIZATION:",
    description:
      "Tailored recommendations and reminders to help you stay on top of your health.",
  },
];

function AboutPage() {
  return (
    <div className="main-container mt-8">
      <h2 className="text-gray-400 text-center my-16 text-2xl  uppercase">
        about us
      </h2>
      {/* Col_1 */}
      <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 items-center lg:justify-between">
        <div className="lg:basis-[35%] bg-red-500">
          <Image
            src={ImageAbout}
            alt="image_about"
            // width={500}
            // height={500}
            className="w-full h-full"
            priority
          />
        </div>
        <div className="flex flex-col gap-y-6 lg:basis-[60%] text-sm font-normal text-justify text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-bold">Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      {/* Col_2 */}
      <div className="mt-12">
        <h4 className="text-gray-700 font-bold text-lg">WHY CHOOSE US</h4>
        <ul className="mt-6 flex flex-col lg:flex-row items-center justify-between">
          {list.map((item) => (
            <li
              key={item.id}
              className="border p-4 sm:p-12 transition-colors duration-300 text-gray-500 hover:bg-main-color hover:text-white cursor-pointer"
            >
              <h5 className="mb-4 font-bold ">{item.title}</h5>
              <p className="">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
