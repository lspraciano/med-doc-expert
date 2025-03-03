import "./create-password-page.css";
import {useNavigate} from "react-router-dom";
import {BasicButton} from "../../components/BasicButton/BasicButton.index.jsx";
import {useState} from "react";
import {BasicInput} from "../../components/BasicInput/BasicInput.index.jsx";
import {CircularCheckbox} from "../../components/CircularCheckbox/CircularCheckbox.index.jsx";

export const CreatePasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const navigate = useNavigate();

    const LoginButtonClick = () => {
        navigate("/");
    };

    const isAtLeast8 = password.length >= 8;
    const hasUpperAndLower = /[A-Z]/.test(password) && /[a-z]/.test(password);
    const hasNumbersAndSymbols = /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
    const passwordsEqual = password === confirmationPassword && password !== "";
    const isButtonDisabled = !(
        isAtLeast8
        && hasUpperAndLower
        && hasNumbersAndSymbols
        && passwordsEqual
    );

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
                                <BasicInput
                                    id={"password"}
                                    label={"Senha"}
                                    placeholder={"Digite sua senha"}
                                    isPassword={true}
                                    onChange={
                                        (event) => setPassword(event.target.value)
                                    }
                                />
                                <BasicInput
                                    id={"confirm-password"}
                                    label={"Confirmar Senha"}
                                    placeholder={"Repita sua senha"}
                                    isPassword={true}
                                    onChange={
                                        (event) => setConfirmationPassword(event.target.value)
                                    }
                                />
                            </div>
                            <div
                                className={"create-password-page__form-zone__create-password__content__actions-zone__feedbacks"}>
                                <CircularCheckbox
                                    id={"cir-ckb-1"}
                                    label={"Use pelo menos 8 caracteres"}
                                    checked={isAtLeast8}
                                    disabled
                                />
                                <CircularCheckbox
                                    id={"cir-ckb-2"}
                                    label={"Misture letras maiúsculas e minúsculas"}
                                    checked={hasUpperAndLower}
                                    disabled
                                />
                                <CircularCheckbox
                                    id={"cir-ckb-3"}
                                    label={"Inclua números e símbolos (!, @, #, etc.)"}
                                    checked={hasNumbersAndSymbols}
                                    disabled
                                />
                                <CircularCheckbox
                                    id={"cir-ckb-4"}
                                    label={"As senhas precisam ser iguais"}
                                    checked={passwordsEqual}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className={"create-password-page__form-zone__create-password__content__button-zone"}>
                            <BasicButton
                                label={"Cadastrar"}
                                onClick={LoginButtonClick}
                                disabled={isButtonDisabled}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
