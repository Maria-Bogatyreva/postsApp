import api from './baseApi.js'
import {addPost, setPosts} from "../../features/posts/postsSlice.js";


const postsApi = api.injectEndpoints({
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
  overrideExisting: false
})

export const {useGetPostsQuery, useCreatePostMutation} = postsApi;

export default postsApi;