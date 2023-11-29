import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../store/cartSlice";

const store = configureStore({
  reducer: {
    user: cartSliceReducer,
  },
});

export default store;
