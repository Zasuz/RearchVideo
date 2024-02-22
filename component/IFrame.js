import {Button} from "antd";
import {useState} from "react";

const IFrame = ({url,width,height}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    console.log(error)
    setError(true);
  }
  return(
      <div className={"m-auto"} style={{ width: width, height: height }}>
        {error ? (
            <p>Không thể tải được tài nguyên từ URL: {url}</p>
        ) : (
            <iframe
                onError={handleError}
                width="100%"
                height="100%"
                src={url}
                title="Dám Rực Rỡ 🔥 GREY D x HIEUTHUHAI x Wren Evans x Obito | Prod. by 2pillz &amp; Kai Đinh | WCAs 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        )}
      </div>  )
}
export default IFrame;