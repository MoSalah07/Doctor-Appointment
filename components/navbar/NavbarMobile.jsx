import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";

export default function NavbarMobile({ open, setOpen }) {
  const [pageSelected, setPageSelected] = useState("home");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const linksList = [
    { id: 8, href: "/", title: "home" },
    { id: 9, href: "/doctors", title: "all doctors" },
    { id: 10, href: "/about", title: "about" },
    { id: 11, href: "/contact", title: "contact" },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        textTransform: "uppercase",
        position: "relative",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="cursor-pointer">
        <CloseIcon className="absolute right-6 top-6" fontSize="large" />
      </div>
      <List sx={{ mt: 10 }}>
        {linksList.map((link) => (
          <Link
            onClick={() => setPageSelected(link.title)}
            href={link.href}
            key={link.id}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={
                  pageSelected === link.title &&
                  "bg-main-color text-white hover:text-black transition-colors duration-75"
                }
                sx={{ fontSize: "14px", borderBottom: "1px solid gray" }}
              >
                <ListItemText primary={link.title} className="" />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="top"
        className="lg:hidden"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
