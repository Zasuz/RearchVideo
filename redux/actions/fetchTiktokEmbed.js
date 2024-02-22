import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTiktokEmbed = createAsyncThunk(
    'handleLink/fetchTiktokEmbed',
    async (url,{rejectWithValue})=>{
        try {
            const response = await fetch(`https://www.tiktok.com/oembed?url=${url}`)
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            data.url = url;
            return data;
        }catch (error){
            return rejectWithValue(error.message)
        }

    }
)