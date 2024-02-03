import React from "react";
import FilmCard from "./FilmCard/filmCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./slider.scss";
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({data}) {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop={{loop:true}}
  
   
    
  >
  {data?.map((item) => <SwiperSlide>
    <FilmCard data={item}></FilmCard>
    </SwiperSlide> )}

  </Swiper>
  );
}
