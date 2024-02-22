'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {Provider} from "react-redux";
import {persistor, store} from "@/redux/store";
import {PersistGate} from "redux-persist/integration/react";

const inter = Inter({subsets: ["latin"]});



export default function RootLayout({children}) {
    return (
            <html lang="en">
            <body className={inter.className}>
            <Provider store={store}>
                <PersistGate  persistor={persistor}>
                <AntdRegistry>{children} </AntdRegistry>
                </PersistGate>
            </Provider>
            </body>
            </html>
    );
}
