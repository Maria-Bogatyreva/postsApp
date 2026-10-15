import api from './baseApi.js'
const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsById: builder.query({
      query: (id) => `posts/${id}/comments`
    })
  }),
  overrideExisting: false
})

export const {useGetCommentsByIdQuery} = commentsApi;

export default commentsApi;