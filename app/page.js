'use client'
import HistoryItem from "@/component/HistoryItem";
import IFrame from "@/component/IFrame";
import SearchBar from "@/component/SearchBar";
import {useSelector} from "react-redux";
import {Button, Spin} from "antd";


const HistoryList = [
    // {
    //     "thumbnailUrl" : "https://p9-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/osUGakXfB9GeIp5RLeAbXEIGVA1AV53FAyeMKW?x-expires=1708704000&x-signature=XbqUZdBwzhtK1tX1VaUNmuOX5PU%3D",
    //     "title" : "Dám Rực Rỡ 🔥 GREY D x HIEUTHUHAI x Wren Evans x Obito | Prod. by 2pillz & Kai Đinh | WCAs 2024",
    //     "searchTime":"22/02/2024"
    // },
    // {
    //     thumbnailUrl : "https://p9-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/osUGakXfB9GeIp5RLeAbXEIGVA1AV53FAyeMKW?x-expires=1708704000&x-signature=XbqUZdBwzhtK1tX1VaUNmuOX5PU%3D",
    //     title : "Dám Rực Rỡ 🔥 GREY D x HIEUTHUHAI x Wren Evans x Obito | Prod. by 2pillz & Kai Đinh | WCAs 2024",
    //     searchTime:"22/02/2024"
    // },
    // {
    //     thumbnailUrl : "https://p9-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/osUGakXfB9GeIp5RLeAbXEIGVA1AV53FAyeMKW?x-expires=1708704000&x-signature=XbqUZdBwzhtK1tX1VaUNmuOX5PU%3D",
    //     title : "Dám Rực Rỡ 🔥 GREY D x HIEUTHUHAI x Wren Evans x Obito | Prod. by 2pillz & Kai Đinh | WCAs 2024",
    //     searchTime:"22/02/2024"
    // }
];
export default function Home() {
    const url = useSelector((state) => state.handleLink.url)
    const type = useSelector((state) => state.handleLink.type)
    // const type = "instagram"
    const history = useSelector((state) => state.handleLink.history)
    const isLoading = useSelector((state) => state.handleLink.isLoading)
    const isError = useSelector((state) => state.handleLink.isError)

    console.log(history)
    return (<main>
        <div className={"w-10/12 m-auto mt-24"}>
            <SearchBar/>
        </div>
        <div className={"my-14"}>
            {isLoading ? (
                <div className={"m-auto w-full h-56 flex justify-center items-center"}>
                    <Spin size="large"/>
                </div>
            ) : isError ?(
                <div className={"m-auto w-full h-56 flex justify-center items-center"}>
                   <h1>Dường như đường dẫn này không tồn tại !</h1>
                </div>
            ): (
                type === "tiktok" ? (
                    <div>
                        <IFrame width={323} height={720} url={url}/>
                    </div>
                ) : type === "youtube" ? (
                    <div>
                        <IFrame width={914} height={514} url={url}/>
                    </div>
                ) : type === "instagram" ? (
                        <div>
                            <IFrame width={323} height={500} url={url}/>
                        </div>)
                    : (
                        <div></div>
                    )


            )}


        </div>
        <div>
            {

                history.map((value, index) => {
                    return <HistoryItem key={index} thumbnailUrl={value.thumbUrl} title={value.title}
                                        searchTime={value.searchTime} type={value.type} url={value.url}></HistoryItem>
                })
            }
            <div
                className={"flex flex-row mt-10 m-auto w-10/12 after:absolute after:h-1 after:w-1/3 after:left-1/3  after:-bottom-1 after:bg-white relative"}>
                <img
                    src={"https://p9-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/osUGakXfB9GeIp5RLeAbXEIGVA1AV53FAyeMKW?x-expires=1708704000&x-signature=XbqUZdBwzhtK1tX1VaUNmuOX5PU%3D"}
                    className={"w-56 h-40 object-cover rounded-lg"}/>
                <div className={"  flex-col flex  ml-8 flex-grow"}>
                    <div className={"text-white  flex flex-row justify-evenly h-1/2"}>
                        <h3 className={"w-3/4 overflow-hidden text-lg"}>Dám Rực Rỡ 🔥 GREY D x HIEUTHUHAI x Wren
                            Evans x Obito | Prod. by 2pillz & Kai Đinh | WCAs 2024</h3>
                        <text className={"w-1/4 text-end text-lg"}>21/02/2024</text>
                    </div>
                    <div className={"flex-grow flex justify-end"}>
                        <Button ghost className={"w-32 self-end"}>Play</Button>
                    </div>

                </div>
                {/*<div className={"h-1 w-1/3 margin-auto bg-white"}>*/}
                {/*</div>*/}
            </div>
        </div>
    </main>);
}
