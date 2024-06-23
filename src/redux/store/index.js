import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { languagesSlice } from "../slice/languagesSlice";

export const store = configureStore({
  reducer: {
    language: languagesSlice.reducer,
  },
});
export const useAppDispatch = () => useDispatch();
