import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech',
        // credentials: 'include',
        prepareHeaders: headers => {
            headers.append('X-API-KEY', '311f6ed2-2da0-4a4e-bda9-3c31df66674a');
        },
    }),
    endpoints: builder => {
        return {
            getFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}`,
            }),
            getSearchByKeywordFilms: builder.query({   
                query: () => `/api/v2.1/films/search-by-keyword`,})
        }
    },
    
})

export const { useGetFilmsQuery, useGetSearchByKeywordFilmsQuery } = baseApi


