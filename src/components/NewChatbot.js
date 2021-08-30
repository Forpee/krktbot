import { useState, useEffect } from "react";
import axios from "axios";


import Messages from "./Messages";
export default function NewChatbot() {
  const [responses, setResponses] = useState([]);
  const [responsesTwo, setResponsesTwo] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [botEnabled, setBotEnabled] = useState(false);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  const handleMessageSubmit = (message) => {
    const data = {
      message,
    };

    setLoading(true);
    
    setResponses((responses) => [...responses, { text: "...", isBot: true }]);
   
    axios
      .post("https://server-dialog.herokuapp.com/api/agent/text-input", null, {
        params: data,
      })
      .then((response) => {
        const responseData = {
          text:
            response.data.data[0].queryResult.fulfillmentText !== ""
              ? response.data.data[0].queryResult.fulfillmentText
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        };

        setResponses((responses) => [...responses, responseData]);
        setBotEnabled(false);
     

      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    };
   
    if (event.key === "Enter") {
      setResponses((responses) => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage("");
      setBotEnabled(true)
    
    }
  };
  useEffect(() => {
    document.getElementById("chatlogs").lastChild.scrollIntoView(false);
  });

  return (
    <div className="tab-three-content pt-2">
      <div id="chatlogs" className="messagesContainer">
        <Messages loading={loading} messages={responses} />
      </div>
      <div className="inputSection">
        {botEnabled ? (
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handleSubmit}
            placeholder="Say something..."
            className="messageInputField border border-r-0 border-l-0 border-b-0 px-2"
            disabled
          />
        ) : (
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handleSubmit}
            placeholder="Say something..."
            autoFocus="autoFocus"
            className="messageInputField border border-r-0 border-l-0 border-b-0 px-2 "
          />
        )}
      </div>
    </div>
  );
}
