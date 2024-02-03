import React from 'react';
import {useGetCollectionsFilmsQuery} from "../../services/base-api";
import Main from '../Main/main'

export const Home = () => {
    const {data} = useGetCollectionsFilmsQuery()
    const elem = Math.floor(Math.random() * 700)
    console.log(data?.items[elem])
     return (
        <div>
            {data?.items.map((item) => <Main data={item}></Main>)}
        </div>
    );
};

