import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: []
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      setPosts: (state, action) => {
        state.posts = action.payload
      },
      addPost: (state, action) => {
        state.posts.unshift(action.payload)
      }
  }
})
// Экспорт селекторов, для использования в компонентах
export const selectPosts = (state) => state.posts.posts

export default postsSlice.reducer

export const {setPosts, addPost} = postsSlice.actions