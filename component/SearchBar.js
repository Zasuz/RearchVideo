'use client'
import Search from "antd/es/input/Search";
import React from "react";
import {log} from "next/dist/server/typescript/utils";
import {useDispatch} from "react-redux";
import {instagram, tiktok, youtube} from "@/redux/reducers/handleLink";
import {fetchYoutubeEmbed} from "@/redux/actions/fetchYoutubeEmbed";
import {fetchTiktokEmbed} from "@/redux/actions/fetchTiktokEmbed";
import {message} from "antd";


const SearchBar = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Đường dẫn không hợp lệ \n Vui lòng nhập đường dẫn từ : Youtube , Tiktok , Instagram',
        });
    };
    const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    const tiktokPattern = /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+$/;
    const instagramPattern = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/[a-zA-Z0-9_]+\/?/;

    const dispatch = useDispatch();
    const onSearch =(value)=>{
        if (youtubePattern.test(value)) {
            dispatch(fetchYoutubeEmbed(value))
        }else if(tiktokPattern.test(value)){
            dispatch(fetchTiktokEmbed(value))
        }
        else if (instagramPattern.test(value)){
            dispatch(instagram(value))
        }else{
            error();
        }
    }
  return(
      <>
      {contextHolder}
      <Search
          ghost ="true"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={value => onSearch(value)}
      />
      </>
  )
}
export default SearchBar;