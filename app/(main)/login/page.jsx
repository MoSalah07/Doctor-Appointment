"use client";
import React from "react";
import AuthComponent from "./components/AuthComponent";

function LoginPage() {
  return (
    <div className="w-full h-[60vh] mt-16">
      <div className="main-container w-full h-full">
        <AuthComponent />
      </div>
    </div>
  );
}

export default LoginPage;
