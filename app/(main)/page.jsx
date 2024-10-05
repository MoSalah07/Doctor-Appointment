import Category from "@/components/home/Category";
import Doctors from "@/components/home/Doctors";
import LandingPage from "@/components/home/LandingPage";
import Promo from "@/components/home/Promo";
import React from "react";

function Home() {
  return (
    <div className="min-h-[calc(100vh-20vh)] mt-8">
      <div className="main-container">
        <LandingPage />
        <Category />
        <Doctors />
        <Promo />
      </div>
    </div>
  );
}

export default Home;
