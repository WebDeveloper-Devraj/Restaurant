import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scroll";
import loginSignUpSlice from "./loginSignUp";
import featuredDishesSlice from "./FeaturedDishes";
import testimonialsSlice from "./testimonials";

const restaurantStore = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    loginSignUpUi: loginSignUpSlice.reducer,
    featuredDishes: featuredDishesSlice.reducer,
    testimonials: testimonialsSlice.reducer,
  },
});

export default restaurantStore;
