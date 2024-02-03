import React from 'react';
import {useGetFilmsQuery} from "../../services/base-api";

export const Home = () => {
    const {data} = useGetFilmsQuery(5047468)
    console.log(data)
     return (
        <div>
            
            {/* {JSON.stringify(data)} */}
        </div>
    );
};

