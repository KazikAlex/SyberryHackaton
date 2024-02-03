import React from "react";
import styles from  "./cardContent.scss";
import Button from '../../../components/Button/Button'

export default function CardContent({data}) {
 
  return (
    <div className="aboutFilm">
      <div className="common">
        <span>{data?.nameRu}</span>
        <span>{data?.nameEn}</span>
        <Button context={"Cмотреть онлайн"} className={styles.btn}></Button>
      </div>
      <div className="filmDescription">
        <div className="left">
          <span>Страна</span>
          <span>Жанр</span>
          <span>Продолжительность</span>
          <span>Премьера</span>
          <span>Возрастное ограничение</span>
          <span>Рейтинг Кинопоиска</span>
          <span>Слоган</span>
        </div>
        <div className="right">
          <span>{data?.countries[0].country}</span>
          <span>{data?.genres[0].genre}</span>
          <span>{data?.filmLength} мин</span>
          <span>{data?.startYear}</span>
          <span>{data?.ratingAgeLimits}</span>
          <span>{data?.ratingKinopoisk}</span>
          <span>{data?.slogan}</span>
        </div>
      </div>
      <div>
        <img src="" alt="Like" />
        <img src="" alt="Dislike" />
      </div>
    </div>
  );
}
