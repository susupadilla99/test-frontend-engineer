'use client'

import { Provider } from "react-redux";
import stores from "./stores";

export default function ReduxProvider({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <Provider store={stores}>
            {children}
        </Provider>
    )
}