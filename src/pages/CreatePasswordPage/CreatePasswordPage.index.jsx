import "./create-password-page.css";
import {LoginInput} from "../../components/LoginInput/LoginInput.index.jsx";
import {useNavigate} from "react-router-dom";
import {BasicButton} from "../../components/BasicButton/BasicButton.index.jsx";
import {useState} from "react";

export const CreatePasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const navigate = useNavigate();
    const LoginButtonClick = () => {
        navigate("/");
    };
    const isButtonDisabled = confirmationPassword.trim() === "" || password.trim() === "";


    return (
        <div className={"create-password-page"}>
            <div className={"create-password-page__form-zone"}>
                <div className={"create-password-page__form-zone__enter-zone"}>
                    <div className={"create-password-page__form-zone__action-zone__content"}>
                        <div className={"create-password-page__form-zone__action-zone__content__text-zone"}>
                            <p>
                                Entrar
                            </p>
                            <p>
                                Já possui cadastro? Faça login aqui.
                            </p>
                        </div>
                        <div className={"create-password-page__form-zone__action-zone__content__button-zone"}>
                            <BasicButton
                                label={"Entrar"}
                                onClick={LoginButtonClick}
                            />
                        </div>
                    </div>
                </div>
                <div className={"create-password-page__form-zone__create-password"}>
                    <div className={"create-password-page__form-zone__create-password__content"}>
                        <div className={"create-password-page__form-zone__create-password__content__text-zone"}>
                            <p>
                                Cadastrar Senha
                            </p>
                        </div>
                        <div className={"create-password-page__form-zone__create-password__content__actions-zone"}>
                            <div
                                className={"create-password-page__form-zone__create-password__content__actions-zone__inputs"}>
                                <LoginInput
                                    id={"2"}
                                    label={"Senha"}
                                    placeholder={"Digite sua senha"}
                                    onChange={
                                        (event) => setPassword(event.target.value)
                                    }
                                />
                                <LoginInput
                                    id={"2"}
                                    label={"Confirmar Senha"}
                                    placeholder={"Repita sua senha"}
                                    onChange={
                                        (event) => setConfirmationPassword(event.target.value)
                                    }
                                />
                            </div>
                            <div
                                className={"create-password-page__form-zone__create-password__content__actions-zone__feedbacks"}>

                            </div>
                        </div>
                        <div className={"create-password-page__form-zone__create-password__content__button-zone"}>
                            <BasicButton
                                label={"Cadastrar"}
                                onClick={LoginButtonClick}
                                disabled={isButtonDisabled}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};