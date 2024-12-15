import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./scroll";
import loginSignUpSlice from "./loginSignUp";

const restaurantStore = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    loginSignUpUi: loginSignUpSlice.reducer,
  },
});

export default restaurantStore;
