import React from 'react';
import {useGetCollectionsFilmsQuery, useGetFilmsQuery} from "../../services/base-api";
import Main from '../Main/main'
import styles from './home.module.scss'
import CardImage from '../Main/CardImage/cardImage';
import CardContent from '../Main/CardContent/cardContent';
import Slider from '../Main/Slider/slider';
import Container from '../../components/Container/Container'

export const Home = () => {

    const {data: randomFilm} = useGetFilmsQuery(4959134)
    const {data: dataAllFilms} = useGetCollectionsFilmsQuery()

     return (
        <Container>
            
            <div className={styles.random}>
                <CardImage data={randomFilm} className={styles.cardImgHome}></CardImage>
                <CardContent data={randomFilm}></CardContent>
            </div>
            <p>Топ 10</p>
            <Slider data={dataAllFilms?.items}/>
            {/* {data?.items.map((item) => <Main data={item}></Main>)} */}
        
        </Container>
        
    );
};

