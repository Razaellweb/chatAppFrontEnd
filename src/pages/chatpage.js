import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const chatid1 = localStorage.getItem("spaceid1");
  const chatid2 = localStorage.getItem("spaceid2");
  const name = localStorage.getItem("nameSpace");
  const receiversName = localStorage.getItem("receiversName");
  const [num, setNum] = useState(0);

  useEffect(() => {
    getMessage();
  }, []);
  useEffect(() => {
    getMessage();
  });

  async function getMessage() {
    const response = await fetch("https://zchatapp.adaptable.app/api/getMessages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatid1,
        chatid2,
        name,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.messages) {
      for (let i = 0; i < data.messages.length; i++) {
        if (data.messages[i].sender == name) {
          data.messages[i].class = "sender";
          setAllMessages(data.messages);
          setNum(Math.random());
        }
      }
    } else {
      setAllMessages([]);
    }

    setNum(Math.random());
  }

  async function sendMessage(event) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("https://zchatapp.adaptable.app/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatid1,
        message,
        name,
      }),
    });
    const data = await response.json();
    if (data.sent) {
      getMessage();
    } else {
      console.log("check for erors");
    }
  }
  return (
    <div className="container">
      <h4 className="receivers">{receiversName}</h4>
      {allMessages.map((item) => {
        return (
          <div key={Math.random()}>
            <fieldset className={item.class}>
              <p>{item.sender}</p>
              <div className="line"></div>
              <h5>{item.message}</h5>
            </fieldset>
            <br />
          </div>
        );
      })}
      <form onSubmit={sendMessage} className="forms">
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <input type="submit" className="btn" value={"send"} />
      </form>
    </div>
  );
};

export default ChatPage;
