import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./apiSlice.js";
import postsReducer from '../features/posts/postsSlice.js'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;