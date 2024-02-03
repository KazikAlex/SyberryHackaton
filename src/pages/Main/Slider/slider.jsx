import React from "react";
import FilmCard from "./FilmCard/filmCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./slider.scss";

export default function Slider() {
  return (
    <div className="slider">
      <div>
        <h3>ТОП-10 Фильмов</h3>
        <FilmCard />
      </div>
      <div>
        <ArrowForwardIcon />
      </div>
    </div>
  );
}
