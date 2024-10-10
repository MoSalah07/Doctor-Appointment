import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { push } = useRouter();

  return (
    <div className="hidden lg:block">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            push(`/profile`);
            handleClose();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            push(`myAppointments`);
            handleClose();
          }}
        >
          My Appointments
        </MenuItem>
        <MenuItem
          onClick={() => {
            signOut();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
