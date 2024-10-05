"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastAlertProvider() {
  return <ToastContainer limit={2} position="top-right" />;
}

export default ToastAlertProvider;
