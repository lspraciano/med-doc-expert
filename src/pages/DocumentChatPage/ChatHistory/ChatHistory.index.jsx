import "./chat-history.css";
import PropTypes from "prop-types";
import {ChatMessage} from "../ChatMessage/ChatMessage.index.jsx";

export const ChatHistory = (
    {
        messages = []
    }
) => {
    return (
        <ul className={"chat-history"}>
            {
                messages.map(
                    (msg) => (
                        <li
                            key={msg.id}
                            className={
                                `chat-history__message chat-history__message--${msg.type === "user" ? "left" : "right"}`
                            }
                        >
                            <ChatMessage
                                text={msg.content}
                                timestamp={msg.timestamp}
                                chatMessageType={msg.type}
                            />
                        </li>
                    )
                )
            }
        </ul>
    );
};


ChatHistory.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                type: PropTypes.oneOf(
                    [
                        "user",
                        "bot"
                    ]
                ).isRequired,
                content: PropTypes.string.isRequired,
                timestamp: PropTypes.string.isRequired,
            }
        )
    ).isRequired,
};
