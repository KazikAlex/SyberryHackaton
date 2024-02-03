import React from 'react';
import {useGetCollectionsFilmsQuery} from "../../services/base-api";
import Main from '../Main/main'

export const Home = () => {
    const {data} = useGetCollectionsFilmsQuery()
    console.log(data?.items)
     return (
        <div>
            {data?.items.map((item) => <Main data={item}></Main>)}
        </div>
    );
};

