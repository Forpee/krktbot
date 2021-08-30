import Message from "./Message";

const Messages = ({ messages, loading }) => {
  return (
    <div>
      {messages.map((message, index) => {
        if (message.isBot) {
          if (message.text !== "..." && messages[index - 1].text === "...") {
        
            messages.splice(index - 1, 1);
            
          }
        }
        return (
          <div key={index}>
            <Message loading={loading} message={message} />
          </div>
        );
      })}
    </div>
  );
};
export default Messages;
