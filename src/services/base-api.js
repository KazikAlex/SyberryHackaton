import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

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
            getSeasonsFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/seasons`,
            }),
            getFactsFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/facts`,
            }),
            getDistributionsFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/distributions`,
            }),
            getBoxOfficeFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/box_office`,
            }),
            getAwardsFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/awards`,
            }),
            getVideosFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/videos`,
            }),
            getSimilarsFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/similars`,
            }),
            getImagesFilms: builder.query({
                query: (id) => `/api/v2.2/films/${id}/images`,
            }),
            getReviewsFilms: builder.query({
                query: (params, id) => {
                    return {
                        url: `/api/v2.2/films/${id}/reviews`,
                        params: params ?? {}
                    }
                }
            }),
            getExternalSourcesFilms: builder.query({
                query: (params, id) => {
                    return {
                        url: `/api/v2.2/films/${id}/external_sources`,
                        params: params ?? {}
                    }
                }
            }),
            getCollectionsFilms: builder.query({
                query: (params) => {
                    return {
                        url: `/api/v2.2/films/collections`,
                        params: params ?? {}
                    }
                }
            }),
            getPremieresFilms: builder.query({
                query: (params) => {
                    return {
                        url: `/api/v2.2/films/premieres`,
                        params: params ?? {}
                    }
                }

            }),
            getFiltersFilms: builder.query({
                query: () => `/api/v2.2/films/filters`,
            }),
            getPaginationFilms: builder.query({
                query: params => {
                    return {
                        url: `/api/v2.2/films`,
                        params: params ?? {}
                    }
                }
            }),
            getSequelsFilms: builder.query({
                query: (params, id) => {
                    return {
                        url: `/api/v2.1/films/${id}/sequels_and_prequels`,
                        params: params ?? {}
                    }
                }
            }),
            getSearchByKeywordFilms: builder.query({
                query: params => {
                    return {
                        url: `/api/v2.1/films/search-by-keyword`,
                        params: params ?? {}
                    }
                }
            }),
            getReleasesFilms: builder.query({
                query: params => {
                    return {
                        url: `/api/v2.1/films/releases`,
                        params: params ?? {}
                    }
                }
            }),
            getStaff: builder.query({
                query: params => {
                    return {
                        url: `/api/v1/staff`,
                        params: params ?? {}
                    }
                }
            }),
            getStaffById: builder.query({
                query: (params, id) => {
                    return {
                        url: `/api/v1/staff/${id}`,
                        params: params ?? {}
                    }
                }
            }),
            getPersons: builder.query({
                query: params => {
                    return {
                        url: `/api/v1/persons`,
                        params: params ?? {}
                    }
                }
            }),
            getMediaPosts: builder.query({
                query: (params) => {
                    return {
                        url: `/api/v1/media_posts`,
                        params: params ?? {}
                    }
                }
            }),
            getKpUsers: builder.query({
                query: (params, id) => {
                    return {
                        url: `/api/v1/kp_users/${id}/votes`,
                        params: params ?? {}
                    }
                }
            }),
            getApiKeys: builder.query({
                query: (apiKey) => `/api/v1/api_keys/${apiKey}`,
            }),


        }
    },
})

export const {
    useGetFilmsQuery,
    useGetSeasonsFilmsQuery,
    useGetFactsFilmsQuery,
    useDistributionsFilmsQuery,
    useGetBoxOfficeFilmsQuery,
    useGetAwardsFilmsQuery,
    useGetVideosFilmsQuery,
    useGetSimilarsFilmsQuery,
    useGetImagesFilmsQuery,
    useGetReviewsFilmsQuery,
    useGetExternalSourcesFilmsQuery,
    useGetCollectionsFilmsQuery,
    useGetPremieresFilmsQuery,
    useGetFiltersFilmsQuery,
    useGetPaginationFilmsQuery,
    useGetSearchByKeywordFilmsQuery,
    useGetReleasesFilmsQuery,
    useGetStaffFilmsQuery,
    useGetStaffByIdFilmsQuery,
    useGetPersonFilmsQuery,
    useGetMediaPostsFilmsQuery,
    useGetKpUsersFilmsQuery,
    useGetApiKeysFilmsQuery,
} = baseApi