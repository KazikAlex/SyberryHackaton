import React from "react";
import CardImage from "./CardImage/cardImage";
import CardContent from "./CardContent/cardContent";
import Slider from "./Slider/slider";
import "./main.scss";

export default function Main() {
  return (
    <>
      <div className="card">
        <CardImage />
        <CardContent />
      </div>
      <Slider />
    </>
  );
}
