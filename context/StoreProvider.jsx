"use client";
import { doctors } from "@/assets/assets_frontend/assets";
import { useContext, createContext } from "react";

const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const value = {
    doctors,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const StoreCTX = () => useContext(StoreContext);

export default StoreContextProvider;
