import {configureStore} from "@reduxjs/toolkit";
import api from "./api/baseApi.js";
import commentsApi from "./api/commentsApi.js";
import postsApi from "./api/postsApi.js";
import postsReducer from '../features/posts/postsSlice.js'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;