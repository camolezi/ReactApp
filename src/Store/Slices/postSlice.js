import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk("post/fetchPosts", async () => {
  let url = `/post/`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    return console.log("Error in request Json:" + err);
  }
});

const initialState = {
  posts: [],
  fetchStatus: "idle",
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    updatePosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.fetchStatus = "loading";
    },
    [fetchPost.rejected]: (state, action) => {
      state.fetchStatus = "error";
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.fetchStatus = "ok";
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { updatePosts } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;
export const selectFetchStatus = (state) => state.post.fetchStatus;

export const selectPost = (id) => (state) =>
  state.post.posts.find((element) => element.id === Number(id));
