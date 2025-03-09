import "./chat.css";
import {ChatHistory} from "../ChatHistory/ChatHistory.index.jsx";
import {mockMessages} from "./mockMessages.js";
import {BasicInput} from "../../../components/BasicInput/BasicInput.index.jsx";

export const Chat = () => {
    return (
        <div className={"chat"}>
            <div className="chat__history-display-zone">
                <ChatHistory
                    messages={mockMessages}
                />
            </div>
            <div className="chat__user-input-zone">
                <BasicInput
                    id={"1"}
                    placeholder={"Envie sua mensagem"}
                    isPassword={false}
                    icon={<i className="bx bxs-send"></i>}
                />
            </div>
        </div>
    );
};