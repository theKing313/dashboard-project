import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashBoardSlice from "./features/dashBoardSlice";


import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // blacklist: ['carts', 'productsCarts', 'status', 'totalPriceUser', 'cartQuantity'],
}

// const rootReducer = combineReducers({
//     // auth: persistReducer(authPersistConfig,authReducer),
//     dashBoardSlice: dashBoardSlice,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: {
        dashBoardSlice,
    },
    // reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});

// export const persist = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;