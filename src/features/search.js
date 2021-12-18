import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: { searchValue: "" },
  reducers: {
    searching: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searching } = searchSlice.actions;

export default searchSlice.reducer;
