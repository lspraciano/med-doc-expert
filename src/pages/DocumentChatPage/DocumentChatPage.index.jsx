import "./document-chat-page.css";
import {BasicPageLayout} from "../../components/BasicPageLayout/BasicPageLayout.index.jsx";
import {Chat} from "./Chat/Chat.index.jsx";

export const DocumentChatPage = () => {
    return (
        <BasicPageLayout
            title={"Chat de Documentos"}
        >
            <Chat/>
        </BasicPageLayout>
    );
};