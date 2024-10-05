"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

function SesstionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SesstionProvider;
