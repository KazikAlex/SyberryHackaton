import React from "react";
import styles from './filmCard.module.scss'


export default function FilmCard({data}) {
  return (
    <div className={styles.filmCard}>
      <img src={data?.posterUrl} alt="Изображение фильма" className={styles.img}/>
      <h4>Название фильма</h4>
    </div>
  );
}
