import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

const storeConfig: any = {
  reducer: {
    User: rootReducer,
  },
};

export const cofigureStore = () => {
  return configureStore(storeConfig);
};
