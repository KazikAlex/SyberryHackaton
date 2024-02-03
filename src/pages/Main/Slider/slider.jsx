import React from "react";
import FilmCard from "./FilmCard/filmCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Slider() {
  return (
    <>
      <div>
        <h3>ТОП-10 Фильмов</h3>
        <FilmCard />
      </div>
      <div>
        <ArrowForwardIcon />
      </div>
    </>
  );
}
