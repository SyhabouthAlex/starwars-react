/**
     * Redux store for the application, utilizes redux-persist to 
     * persist store even when app is offline.
*/
import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

/**
     * autoMergeLevel2 means that the persisted store will still use the keys from the
     * original initial states and overwrite existing keys while ignoring non-existing keys
     * compared to autoMergeLevel1 which will simply overwrite the initial states with the persisted
     * states
*/
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);

