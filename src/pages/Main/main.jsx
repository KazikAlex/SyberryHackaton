import React from "react";
import CardImage from "./CardImage/cardImage";
import CardContent from "./CardContent/cardContent";
import Slider from "./Slider/slider";
import "./main.scss";
import { useGetPremieresFilmsQuery } from "../../services/base-api";

export default function Main() {
  const { data } = useGetPremieresFilmsQuery();

  // console.log(data);

  return (
    <>
      <div className="card">
        <CardImage data={data} />
        <CardContent data={data} />
      </div>
      <Slider />
    </>
  );
}
