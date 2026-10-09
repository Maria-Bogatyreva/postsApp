import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts?_limit=5'
    }),
    getCommentsById: builder.query({
      query: (id) => `posts/${id}/comments`
    })
  }),
})

// экспорт хуков для использования в компонентах

export const {useGetPostsQuery, useGetCommentsByIdQuery} = apiSlice;