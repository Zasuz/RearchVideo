import {configureStore} from "@reduxjs/toolkit";
import {handleLinkReducer} from "@/redux/reducers/handleLink";


export const store = configureStore({
    reducer:{
        handleLink : handleLinkReducer
    }
})