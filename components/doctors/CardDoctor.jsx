"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/navigation";

export default function CardDoctor({
  _id,
  name,
  speciality,
  image,
  isDoctors,
}) {
  const { push } = useRouter();
  return (
    <Card
      onClick={() => {
        push(`/appointment/${_id}`);
        scrollTo(0, 0);
      }}
      className="transition-all duration-500 hover:-translate-y-3 fade-animation"
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          className="bg-slate-200"
          component="img"
          height="140"
          image={image.src}
          alt={name}
        />
        <CardContent>
          <Typography
            className={
              isDoctors
                ? "flex items-center gap-2 text-green-500 font-semibold text-[12px] mb-1"
                : `text-green-500 font-semibold text-[12px] relative mb-1`
            }
            variant="body2"
          >
            <span
              className={
                isDoctors
                  ? "bg-green-500 w-2 h-2 rounded-lg"
                  : `absolute top-1/2 -translate-y-[65%] left-8 w-2 h-2 rounded-full bg-green-500`
              }
            >
              {" "}
            </span>{" "}
            Available
          </Typography>
          <Typography
            className="text-base font-semibold text-gray-900"
            gutterBottom
            variant="p"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            className="text-gray-500"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {speciality}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
