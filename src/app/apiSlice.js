import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {addPost, setPosts} from "../features/posts/postsSlice.js";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts?_limit=5',
      async onQueryStarted(queryArgument, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setPosts(data))
        } catch (error) {
          console.error(error)
        }
      }
    }),
    getCommentsById: builder.query({
      query: (id) => `posts/${id}/comments`
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost
      }),
      async onQueryStarted(queryArgument,{dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(addPost(data))
        } catch(error) {
          console.error(error)

        }
      }
    })
  }),
})

// экспорт хуков для использования в компонентах

export const {useGetPostsQuery, useGetCommentsByIdQuery, useCreatePostMutation} = apiSlice;