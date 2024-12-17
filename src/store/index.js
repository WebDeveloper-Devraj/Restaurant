import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scroll";
import loginSignUpSlice from "./loginSignUp";
import featuredDishesSlice from "./FeaturedDishes";
import testimonialsSlice from "./testimonials";
import dishesSlice from "./dishes";
import categoriesSlice from "./categories";
import membersSlice from "./members";

const restaurantStore = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    loginSignUpUi: loginSignUpSlice.reducer,
    featuredDishes: featuredDishesSlice.reducer,
    testimonials: testimonialsSlice.reducer,
    dishes: dishesSlice.reducer,
    categories: categoriesSlice.reducer,
    members: membersSlice.reducer,
  },
});

export default restaurantStore;
