import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { persistStore, persistReducer } from "redux-persist";
// For Session Storage
import storage from "redux-persist/lib/storage/session";
// For Local Storage
//import storage from "redux-persist/lib/storage/session"; 

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
