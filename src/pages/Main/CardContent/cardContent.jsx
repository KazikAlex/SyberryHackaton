import React from "react";
import "./cardContent.scss";

export default function CardContent(props) {
  return (
    <div className="aboutFilm">
      <div className="common">
        <span>FilmName</span>
        <span>EngName</span>
        <button>Смотреть</button>
      </div>
      <div className="filmDescription">
        <div className="left">
          <span>Страна</span>
          <span>Жанр</span>
          <span>Продолжительность</span>
          <span>Премьера (Мир)</span>
          <span>Качество</span>
          <span>Режисер</span>
        </div>
        <div className="right">
          <span>Франция</span>
          <span>Боевик</span>
          <span>113 мин</span>
          <span>август</span>
          <span>тс</span>
          <span>Люк</span>
        </div>
      </div>
      <div>
        <img src="" alt="Like" />
        <img src="" alt="Dislike" />
      </div>
    </div>
  );
}
