import React from 'react';
import {useGetFilmsQuery} from "../../services/base-api";

export const Home = () => {
    const {data} = useGetFilmsQuery(222)
     return (
        <div>
Hello worlld
            {/*{JSON.stringify(data)}*/}
        </div>
    );
};

