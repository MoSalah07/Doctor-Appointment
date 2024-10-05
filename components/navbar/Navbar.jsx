"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/assets_frontend/logo.svg";
import menuIcon from "@/assets/assets_frontend/menu_icon.svg";
import NavbarMobile from "./NavbarMobile";
import { useSession } from "next-auth/react";
import AuthMenu from "./AuthMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="h-[10vh] w-full">
      <div className="flex items-center justify-between h-full w-full main-container border-b border-gray-400">
        <Link
          href={`/`}
          className="logo h-[150px] w-[150px] select-none outline-none border-none"
        >
          <Image className="w-full h-full" src={logo} priority alt="logo" />
        </Link>
        <NavLinks />
        <div className="right-nav">
          <Image
            onClick={toggleDrawer(true)}
            className="block lg:hidden cursor-pointer"
            src={menuIcon}
            alt="menu-icon"
            width={30}
            priority
          />

          {session ? (
            <AuthMenu />
          ) : (
            <Link href={`/login`} className="hidden lg:block">
              <button
                className="bg-main-color capitalize text-white rounded-full px-6 py-2 text-sm"
                type="button"
              >
                create account
              </button>
            </Link>
          )}
        </div>
      </div>
      <NavbarMobile open={open} setOpen={setOpen} />
    </header>
  );
}

export default Navbar;
