import React from "react";
import Img from "./img/about-pets-320.png";

export default function FilmCard() {
  return (
    <div>
      <img src={Img} logo="Изображение фильма" />
      <h4>Название фильма</h4>
    </div>
  );
}
