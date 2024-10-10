import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter, usePathname } from "next/navigation";

export default function FilterSpeciality({ specialityData }) {
  const { push } = useRouter();
  const pathName = usePathname().split("/")[2];
  const pathNameIsSelected =
    pathName === "General%20physician" ? "General physician" : pathName;

  return (
    <div className="block md:hidden mb-8 w-full">
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <nav aria-label="secondary mailbox folders">
            <List>
              {specialityData.map((item, idx) => (
                <ListItem disablePadding key={idx}>
                  <ListItemButton
                    className={`${
                      item.speciality === pathNameIsSelected
                        ? "bg-main-color text-white"
                        : " text-black "
                    } hover:text-black`}
                    onClick={() => {
                      push(
                        pathNameIsSelected === item.speciality
                          ? `/doctors`
                          : `/doctors/${item.speciality}`
                      );
                    }}
                    sx={{ border: "1px solid #9ca3af", margin: "8px 0" }}
                  >
                    <ListItemText primary={item.speciality} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
