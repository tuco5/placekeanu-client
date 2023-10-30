import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import KeanuReducer from "./features/keanuSlice";
import keanuSaga from "./features/keanuSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    Keanu: KeanuReducer,
  },
  middleware: [saga],
  devTools: process.env.NODE_ENV !== "production",
});

saga.run(keanuSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
