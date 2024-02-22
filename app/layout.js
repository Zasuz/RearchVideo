'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

const inter = Inter({subsets: ["latin"]});



export default function RootLayout({children}) {
    return (
            <html lang="en">
            <body className={inter.className}>

                <AntdRegistry><Provider store={store}>{children} </Provider></AntdRegistry>

            </body>
            </html>
    );
}
