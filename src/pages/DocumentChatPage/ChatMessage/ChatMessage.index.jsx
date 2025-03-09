import PropTypes from "prop-types";
import "./chat-message.css";
import ReactMarkdown from "react-markdown";

export const ChatMessage = (
    {
        text = "Mensagem padrão",
        timestamp = "00:00",
        onLike = () => console.log("Curtir mensagem"),
        onDislike = () => console.log("Não curtir mensagem"),
        chatMessageType = "user",
        onCopy,
        avatar,

    }
) => {
    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log("Texto copiado com sucesso!");
                    if (onCopy) onCopy(text);
                })
                .catch((err) => {
                    console.error("Erro ao copiar o texto", err);
                });
        } else {
            console.warn("Clipboard API não é suportada nesse navegador.");
        }
    };

    const AvatarComponent = (
        <div
            className={`chat-message__avatar-zone chat-message__avatar-zone--${chatMessageType}`}
        >
            {
                chatMessageType === "bot" ?
                    <i className="bx bxs-bot"></i>
                    :
                    <i className="bx bxs-user-circle"></i>
            }

        </div>
    );

    return (
        <article className="chat-message">
            {chatMessageType === "bot" && AvatarComponent}
            <div className={"chat-message__main-zone"}>
                <div
                    className={`chat-message__main-zone__text-zone chat-message__main-zone__text-zone--${chatMessageType}`}>
                    <ReactMarkdown>
                        {text}
                    </ReactMarkdown>
                </div>
                <div className="chat-message__main-zone__sub-text-zone">
                    <div className="chat-message__main-zone__sub-text-zone__button-zone">
                        <button
                            aria-label="Copiar mensagem"
                            onClick={handleCopy}
                        >
                            <i className="bx bxs-copy-alt"></i>
                        </button>
                        <button
                            aria-label="Curtir mensagem"
                            onClick={onLike}
                        >
                            <i className="bx bxs-like"></i>
                        </button>
                        <button
                            aria-label="Não curtir mensagem"
                            onClick={onDislike}
                        >
                            <i className="bx bxs-dislike"></i>
                        </button>
                    </div>
                    <div className="chat-message__main-zone__sub-text-zone__time-zone">
                        {timestamp}
                    </div>
                </div>
            </div>
            {chatMessageType === "user" && AvatarComponent}
        </article>
    );
};

ChatMessage.propTypes = {
    text: PropTypes.string,
    timestamp: PropTypes.string,
    onCopy: PropTypes.func,
    onLike: PropTypes.func,
    chatMessageType: PropTypes.oneOf(
        [
            "user",
            "bot"
        ]
    ).isRequired,
    onDislike: PropTypes.func,
    avatar: PropTypes.string,
};
