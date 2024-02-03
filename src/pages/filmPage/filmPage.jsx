import React from "react";
import styles from './filmPage.module.scss'
import Container from "../../components/Container/Container";
import Main from '../Main/main'
import Slider from "../Main/Slider/slider";
import FilmCard from "../Main/Slider/FilmCard/filmCard";


export default function FilmPage () {
    return(
        <Container>
            <Main></Main>
            <div className={styles.description}></div>
            <Slider></Slider>
            <div className={styles.reating}></div>
            <div className={styles.simiralFilms}>
                <FilmCard></FilmCard>
            </div>
        </Container>
    )
}