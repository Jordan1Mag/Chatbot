import './css/App.css'
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

import generateRandomString from './MessageGenerator';
import { useEffect, useRef, useState } from 'react';

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, seek infromation, or even request assistance with various tasks. Just let me know how I can help you!",
      isBot: true
    }
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userInput = input;
    setInput('');
    setMessages([
      ...messages,
      { text: userInput, isBot: false }
    ]);

    const response = generateRandomString();

    setMessages([
      ...messages,
      { text: userInput, isBot: false },
      { text: response, isBot: true }
    ])
  };

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <div className="App">
        <div className="sideBar">
          <div className="upperSidebar">
            <div className="upperSidebarTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">EyeQ</span></div>
            <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />Manage Services</button>
            <div className="upperSidebarBottom">
              <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
              <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
            </div>
          </div>
          <div className="lowerSidebar">
            <div className="listItems"><img src={home} alt="Documentation" className="listItemsImg" />Documentation</div>
            <div className="listItems"><img src={saved} alt="GitHub" className="listItemsImg" />GitHub</div>
          </div>
        </div>
        <div className="main">
          <div className="chatMessages">
            {messages.map((message, i) =>
              <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="ChatGPT" /><p className="txt">{message.text}</p>
              </div>
            )}
            <div ref={msgEnd} />
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder="Send a message" value={input} onKeyDown={handleEnter} onChange={(e => { setInput(e.target.value) })} />
              <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
