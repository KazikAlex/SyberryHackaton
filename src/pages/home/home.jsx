import React from 'react';
import Main from '../Main/main'
import {useGetCollectionsFilmsQuery, useGetFilmsQuery} from "../../services/base-api";
import Container from '../../components/Container/Container';


export const Home = () => {
    const {data: filmData} = useGetFilmsQuery(Math.floor(Math.random() * 700))
    const {data: dataAllFilms} = useGetCollectionsFilmsQuery()
    console.log(dataAllFilms?.items);
     return (
        <Container>
            {dataAllFilms.items.map((item) => <Main data={item}></Main>)}
            
        </Container>
        
    );
};

