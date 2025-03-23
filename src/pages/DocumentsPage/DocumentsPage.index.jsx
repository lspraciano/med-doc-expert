import {BasicPageLayout} from "../../components/BasicPageLayout/BasicPageLayout.index.jsx";
import "./documents-page.css";
import {BasicInput} from "../../components/BasicInput/BasicInput.index.jsx";
import {SwitchIcon} from "../../components/SwitchIcon/SwitchIcon.index.jsx";
import {DocumentsTable} from "./DocumentsTable/DocumentsTable.index.jsx";
import {useState} from "react";
import {BasicModal} from "../../components/BasicModal/BasicModal.index.jsx";
import {DocumentRegister} from "./DocumentRegister/DocumentRegister.index.jsx";
import documentsDB from "./documentsDB.json";

export const DocumentsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [documents, setDocuments] = useState(documentsDB);
    const [editingDoc, setEditingDoc] = useState(null);
    const [showInactiveDocuments, setShowInactiveDocuments] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const handleEdit = (id) => {
        const docToEdit = documents.find((doc) => doc.id === id);
        setEditingDoc(docToEdit);
        setIsModalOpen(true);
    };

    const handleSaveDocument = (doc) => {
        if (editingDoc) {
            const updatedDocuments = documents.map((item) =>
                item.id === editingDoc.id ? {...item, ...doc} : item
            );
            setDocuments(updatedDocuments);
            setEditingDoc(null);
        } else {
            const newDoc = {...doc, isActive: true};
            const newDocWithId = {id: documents.length + 1, ...newDoc};
            setDocuments((prev) => [...prev, newDocWithId]);
        }

        setIsModalOpen(false);
    };

    const handleToggleActive = (id) => {
        const updatedDocuments = documents.map((doc) =>
            doc.id === id ? {...doc, isActive: !doc.isActive} : doc
        );
        setDocuments(updatedDocuments);
    };

    const handleToggleShowInactiveDocuments = (switchValue) => {
        setShowInactiveDocuments(switchValue);
    }

    const handleAddClick = () => {
        setEditingDoc(null);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingDoc(null);
    }

    return (
        <BasicPageLayout
            title={"Documentos"}
        >
            <BasicModal
                isOpen={isModalOpen}
            >
                <DocumentRegister
                    closeModal={handleCloseModal}
                    saveDocument={handleSaveDocument}
                    initialData={editingDoc}
                />
            </BasicModal>
            <div className={"documents"}>
                <div className={"documents__input-zone"}>
                    <div className={"documents__input-zone__input-zone"}>
                        <BasicInput
                            id={"1"}
                            placeholder={"Faça sua busca"}
                            icon={<i className="bx bx-search-alt-2"></i>}
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>
                    <div className={"documents__input-zone__actions-zone"}>
                        <SwitchIcon
                            iconOne={<i className="bx bxs-toggle-left"></i>}
                            iconTwo={<i className="bx bxs-toggle-right"></i>}
                            label={"Ver desabilitados"}
                            onSwitch={handleToggleShowInactiveDocuments}
                            value={showInactiveDocuments}
                        />
                        <i
                            className="bx bxs-plus-square"
                            onClick={handleAddClick}
                        >
                        </i>
                    </div>
                </div>
                <div className={"documents__table-zone"}>
                    <DocumentsTable
                        data={
                            documents
                                .filter((doc) => (showInactiveDocuments || doc.isActive))
                                .filter((doc) =>
                                    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .sort((a, b) => a.name.localeCompare(b.name))
                        }
                        onEdit={handleEdit}
                        onToggleActive={handleToggleActive}
                    />
                </div>
            </div>
        </BasicPageLayout>
    );
};