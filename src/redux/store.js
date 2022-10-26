import { configureStore } from "@reduxjs/toolkit";
import { songApi } from "./services/songApi";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [songApi.reducerPath]: songApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songApi.middleware),
});
