import {BasicPageLayout} from "../../components/BasicPageLayout/BasicPageLayout.index.jsx";
import "./documents-page.css";
import {BasicInput} from "../../components/BasicInput/BasicInput.index.jsx";
import {SwitchIcon} from "../../components/SwitchIcon/SwitchIcon.index.jsx";
import {DocumentsTable} from "./DocumentsTable/DocumentsTable.index.jsx";
import {useState} from "react";
import {BasicModal} from "../../components/BasicModal/BasicModal.index.jsx";
import {DocumentRegister} from "./DocumentRegister/DocumentRegister.index.jsx";

export const DocumentsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = [
        {id: 1, name: "TGO", type: "Bula de Reagente", version: "v2 - 19/01/2025"},
        {id: 2, name: "TGP", type: "Bula de Reagente", version: "v14 - 07/08/2024"},
        {id: 3, name: "CREATININA", type: "Bula de Reagente", version: "v9 - 31/11/2023"},
    ];
    const handleEdit = (id) => {
        console.log("Editar item com id:", id);
    };

    return (
        <BasicPageLayout
            title={"Documentos"}
        >
            <BasicModal
                isOpen={isModalOpen}
            >
                <DocumentRegister/>
            </BasicModal>
            <div className={"documents"}>
                <div className={"documents__input-zone"}>
                    <div className={"documents__input-zone__input-zone"}>
                        <BasicInput
                            id={"1"}
                            placeholder={"Faça sua busca"}
                            icon={<i className="bx bx-search-alt-2"></i>}
                        />
                    </div>
                    <div className={"documents__input-zone__actions-zone"}>
                        <SwitchIcon
                            iconOne={<i className="bx bxs-toggle-left"></i>}
                            iconTwo={<i className="bx bxs-toggle-right"></i>}
                            label={"Ver desabilitados"}
                        />
                        <i className="bx bxs-plus-square" onClick={() => setIsModalOpen(true)}></i>
                    </div>
                </div>
                <div className={"documents__table-zone"}>
                    <DocumentsTable
                        data={data}
                        onEdit={handleEdit}
                    />
                </div>
            </div>
        </BasicPageLayout>
    );
};