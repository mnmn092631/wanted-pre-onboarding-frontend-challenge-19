import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import * as Todo from "./todo";

export type AppState = {
  todo: Todo.State;
};

const rootReducer = combineReducers({
  todo: Todo.reducer,
});

const initializeStore = () => {
  return configureStore({ reducer: rootReducer });
};

export function useStore() {
  return useMemo(() => initializeStore(), []);
}
