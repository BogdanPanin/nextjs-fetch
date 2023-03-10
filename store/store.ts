import { configureStore } from "@reduxjs/toolkit/dist";
import { userApi } from "./user/user.api";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type appDispatch = typeof store.dispatch;
