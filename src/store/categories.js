import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "All",
  categories: ["All", "Starters", "Main Course", "Desserts", "Beverages"],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const categoriesSliceActions = categoriesSlice.actions;
export default categoriesSlice;
