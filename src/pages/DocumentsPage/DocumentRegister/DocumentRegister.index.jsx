import "./document-register.css";
import {BasicInput} from "../../../components/BasicInput/BasicInput.index.jsx";
import {DropFile} from "../../../components/DropFile/DropFile.index.jsx";
import {OutlinedButton} from "../../../components/OutlinedButton/OutlinedButton.index.jsx";

export const DocumentRegister = () => {
    return (
        <div className={"document-register"}>
            <div className={"document-register__title-zone"}>
                <p>
                    Cadastrar Documento
                </p>
            </div>

            <div className={"document-register__title-line-zone"}>
            </div>

            <div className={"document-register__enter-zone"}>
                <div className={"document-register__inputs-zone__inputs-zone"}>
                    <BasicInput
                        id={"1"}
                        label={"Nome"}
                        placeholder={"Nome"}
                        isPassword={false}
                    />
                    <BasicInput
                        id={"2"}
                        label={"Tipo"}
                        placeholder={"Tipo"}
                        isPassword={false}
                    />
                    <BasicInput
                        id={"3"}
                        label={"Versão"}
                        placeholder={"Versão"}
                        isPassword={false}
                    />
                </div>
                <div className={"document-register__inputs-zone__drop-file-zone"}>
                    <DropFile/>
                </div>
            </div>

            <div className={"document-register__enter-line-zone"}>
            </div>

            <div className={"document-register__button-zone"}>
                <div className={"document-register__button-zone__close-button"}>
                    <OutlinedButton
                        label={"Entrar"}
                    />
                </div>
                <div className={"document-register__button-zone__save-button"}>
                    <OutlinedButton
                        label={"Salvar"}
                    />
                </div>

            </div>
        </div>
    );
};