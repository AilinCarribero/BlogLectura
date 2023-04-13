import { configureStore } from "@reduxjs/toolkit";
import narrativaReducer from "./slice/Narrativas/narrativaSlice";

export const store = configureStore({
    reducer: {
        narrativaRedux: narrativaReducer
    }
});
