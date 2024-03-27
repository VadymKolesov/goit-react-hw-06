import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const contactsPersistReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
