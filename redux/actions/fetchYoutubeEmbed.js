

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchYoutubeEmbed = createAsyncThunk(
    'handleLink/fetchYoutubeEmbed',
    async (url, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            data.url = url;
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);