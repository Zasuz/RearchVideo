import { createSlice } from '@reduxjs/toolkit';
import {fetchYoutubeEmbed} from "@/redux/actions/fetchYoutubeEmbed";
import {fetchTiktokEmbed} from "@/redux/actions/fetchTiktokEmbed";
import instagramImg from "../../public/instagram-icon.png"
import { format } from 'date-fns';
import React from 'react';

// const getFromStorage = (key) => {
//     if(typeof window !== 'undefined'){
//         return JSON.parse(localStorage.getItem('localStorageData')) || [];
//     }
// }







const initialState = {
    url : "",
    history: [],
    type:"",
    isLoading:false,
    isError:false,
};



export const handleLinkSlice = createSlice({
    name: 'handleLink',
    initialState: initialState,
    reducers: {
        instagram: (state,action) => {
            const url = action.payload+"embed"
            const thumbUrl = instagramImg.src ;
            const title = "Link bài post : " + url;
            saveHistory(state,thumbUrl,title,"instagram",action.payload);
            saveState(state,url,"instagram")

        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchYoutubeEmbed.fulfilled,(state, action)=>{
            console.log(action.payload)
            const src = action.payload.html
            const srcRegex = /src="([^"]*)"/;
            const match = src.match(srcRegex);
            const url = match ? match[1] : null;

            const thumbUrl = action.payload.thumbnail_url;
            const title = action.payload.title;

            saveHistory(state,thumbUrl,title,"youtube",action.payload.url)
            saveState(state,url,"youtube")

        })
        builder.addCase(fetchYoutubeEmbed.pending,(state, action)=>{
           state.isLoading = true;
        })
        builder.addCase(fetchYoutubeEmbed.rejected,(state, action)=>{
            state.isLoading = false;
            state.isError = true;
        })
        builder.addCase(fetchTiktokEmbed.fulfilled,(state, action)=>{
            const id =  action.payload.embed_product_id;
            const url ="https://www.tiktok.com/embed/v2/"+id
            const thumbUrl = action.payload.thumbnail_url;
            const title = action.payload.title;
            saveHistory(state,thumbUrl,title,"tiktok",action.payload.url)
            saveState(state,url,"tiktok")
        })
        builder.addCase(fetchTiktokEmbed.pending,(state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchTiktokEmbed.rejected,(state, action)=>{
            state.isLoading = false;
            state.isError = true;
        })
    }


});
const saveHistory = (state,thumbUrl,title,type,url)=>{

    const current = new Date();
    const dateFormat = 'HH:mm dd/MM/yyyy'; // 'HH' là giờ theo định dạng 24 giờ
    const currentFormatted = format(current, dateFormat);

    const historyInfoItem = { thumbUrl: thumbUrl,title:title,searchTime:currentFormatted.toString(),type:type,url:url};
    state.history = [historyInfoItem,...state.history];
    // localStorage.setItem('localStorageData', JSON.stringify(state.history));
}

const saveState =(state,url,type)=>{
    state.isLoading = false;
    state.isError = false;
    state.url =url
    state.type =type
    console.log(state.type)
}

export const { youtube, tiktok, instagram } = handleLinkSlice.actions;
export const handleLinkReducer=handleLinkSlice.reducer;

