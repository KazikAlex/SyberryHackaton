import React from "react";


export default function CardImage({data}) {
  return <img src={data?.posterUrl} alt="Картинка" />;
}
