'use client'


import { Provider } from "react-redux";
import { store } from './store'
export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
/* Instruments */
// import { store, persist } from './store'

// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// let persistor = persistStore(store)

// export const Providers = (props: React.PropsWithChildren) => {
//     return (
//         <Provider store={store}>
//             {props.children}
//             <PersistGate loading={null} persistor={persistor}>
//             </PersistGate>
//         </Provider>
//     )
// }


