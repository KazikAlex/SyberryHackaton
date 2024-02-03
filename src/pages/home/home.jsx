import React from 'react';
import {useGetCollectionsFilmsQuery, useGetFilmsQuery} from "../../services/base-api";
import Main from '../Main/main'
import styles from './home.module.scss'
import CardImage from '../Main/CardImage/cardImage';
import CardContent from '../Main/CardContent/cardContent';
import Slider from '../Main/Slider/slider';

export const Home = () => {
    const {data: randomFilm} = useGetFilmsQuery(122554)
    console.log(randomFilm);
    const {data: dataAllFilms} = useGetCollectionsFilmsQuery()
    console.log(dataAllFilms);
    const elem = Math.floor(Math.random() * 700)
     return (
        <div className={styles.homeContainer}>
            <div className={styles.random}>
                <CardImage data={randomFilm}></CardImage>
                <CardContent data={randomFilm}></CardContent>
            </div>
            <p>Топ 10</p>
            <Slider data={dataAllFilms?.items}>

            </Slider>
            {/* {data?.items.map((item) => <Main data={item}></Main>)} */}
        </div>
    );
};

