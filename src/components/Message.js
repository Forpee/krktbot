import React from "react";
import { Suspense } from "react";
import { useEffect, useState } from "react";

const Message = ({ message, loading }) => {
  const [texts, setTexts] = useState([]);
  
    
   
  
  return (
    <div className="messageCard">
   
      {message.isBot ? (
        <div className="botCard my-4 rounded-r-full rounded-tl-full ">
          <p
            style={{
              paddingLeft: "16px",
              paddingRight: "10px",

              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            {message.text}
          </p>
        </div>
      ) : (
        <div className="userCard rounded-l-full rounded-br-full">
          <p
            style={{
              paddingLeft: "16px",
              paddingRight: "10px",

              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            {message.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Message;
