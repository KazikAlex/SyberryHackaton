import React from "react";

export default function FilmCard({data}) {
  return (
    <div>
      <img src={data?.posterUrl} alt="Изображение фильма" />
      <h4>Название фильма</h4>
    </div>
  );
}
