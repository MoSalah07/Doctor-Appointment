import React, { useState } from "react";
import styles from "@/styles/navbar.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const linksList = [
  { id: 1, href: "/", title: "home" },
  { id: 2, href: "/doctors", title: "all doctors" },
  { id: 3, href: "/about", title: "about" },
  { id: 4, href: "/contact", title: "contact" },
];

function NavLinks() {
  const [isActive, setIsActive] = useState("home");

  return (
    <nav>
      <ul className="hidden lg:flex items-center justify-center gap-4 uppercase">
        {linksList.map((link) => (
          <Link
            href={link.href}
            onClick={() => setIsActive(link.title)}
            key={link.id}
            className={`font-bold text-sm tracking-wider cursor-pointer ${
              isActive === link.title && styles.navbar_selected_li
            }`}
          >
            <li>{link.title}</li>
          </Link>
        ))}
        <Button size="small" variant="contained" sx={{ bgcolor: "#5f6fff" }}>
          ِAdmin Panel
        </Button>
      </ul>
    </nav>
  );
}

export default NavLinks;
