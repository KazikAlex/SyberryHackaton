import React from "react";
import styles from './cardImage.module.scss'

export default function CardImage({data, className}) {
  return (
    <img src={data?.posterUrl} alt="Картинка" className={className}/>
  )
  }
