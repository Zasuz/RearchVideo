import {Button} from "antd";
import {fetchYoutubeEmbed} from "@/redux/actions/fetchYoutubeEmbed";
import {fetchTiktokEmbed} from "@/redux/actions/fetchTiktokEmbed";
import {instagram} from "@/redux/reducers/handleLink";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

const HistoryItem = ({thumbnailUrl,title,searchTime,type,url}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        if (type ==="youtube") {
            dispatch(fetchYoutubeEmbed(url))
        }else if(type ==="tiktok"){
            dispatch(fetchTiktokEmbed(url))
        }
        else if (type ==="instagram"){
            dispatch(instagram(url))
        }else{

        }
    }

        return(
       <>
           <div className={"flex flex-row mt-10 m-auto w-10/12 after:absolute after:h-1 after:w-1/3 after:left-1/3  after:-bottom-1 after:bg-white relative"}>
           <img
               src={thumbnailUrl}
               className={"w-56 h-40 object-cover rounded-lg"}/>
           <div className={"  flex-col flex  ml-8 flex-grow"}>
               <div className={"text-white  flex flex-row justify-evenly h-1/2"}>
                   <h3 className={"w-3/4 overflow-hidden text-lg"}>{title}</h3>
                   <text className={"w-1/4 text-end text-lg"}>{searchTime}</text>
               </div>
               <div className={"flex-grow flex justify-end"}>
                   <Button ghost="true" className={"w-32 self-end"} onClick={handleClick}>Play</Button>
               </div>
           </div>

       </div>
       </>
   )
 }
 export default HistoryItem;