import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    color: "",
    show: false,
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.message = action.payload.message;
            state.color = action.payload.color;
            state.show = true;
        },
        hidePopup: (state) => {
            state.show = false;
        },
    },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;
