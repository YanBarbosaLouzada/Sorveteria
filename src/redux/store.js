import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import popupReducer from "./popup/popupSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        popup: popupReducer,
    },
});

export default store;
