import "./chat.css";
import {ChatHistory} from "../ChatHistory/ChatHistory.index.jsx";
import {BasicInput} from "../../../components/BasicInput/BasicInput.index.jsx";
import {useEffect, useRef, useState} from "react";

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const chatHistoryRef = useRef(null);

    const sendMessage = () => {
        if (currentMessage.trim()) {
            const newMessage = {
                id: messages.length + 1,
                type: "user",
                content: currentMessage,
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setCurrentMessage("");

            setTimeout(() => {
                const botResponse = {
                    id: messages.length + 2,
                    type: "bot",
                    content: "Recebido!",
                    timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    useEffect(() => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className={"chat"}>
            <div
                className="chat__history-display-zone"
                ref={chatHistoryRef}
            >
                <ChatHistory
                    messages={messages}
                />
            </div>
            <div className="chat__user-input-zone">
                <BasicInput
                    id={"1"}
                    placeholder={"Envie sua mensagem"}
                    isPassword={false}
                    icon={<i className="bx bxs-send"></i>}
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onIconClick={sendMessage}
                />
            </div>
        </div>
    );
};