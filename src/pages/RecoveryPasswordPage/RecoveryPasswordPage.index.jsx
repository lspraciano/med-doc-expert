import "./recovery-password-page.css";
import {LoginInput} from "../../components/LoginInput/LoginInput.index.jsx";
import {useNavigate} from "react-router-dom";
import {BasicButton} from "../../components/BasicButton/BasicButton.index.jsx";
import {useState} from "react";

export const RecoveryPasswordPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const LoginButtonClick = () => {
        navigate("/");
    };
    const RegisterButtonClick = () => {
        navigate("/create-password");
    };
    const isButtonDisabled = email.trim() === "";


    return (
        <div className={"recovery-password-page"}>
            <div className={"recovery-password-page__form-zone"}>
                <div className={"recovery-password-page__form-zone__enter-zone"}>
                    <div className={"recovery-password-page__form-zone__action-zone__content"}>
                        <div className={"recovery-password-page__form-zone__action-zone__content__text-zone"}>
                            <p>
                                Entrar
                            </p>
                            <p>
                                Já possui cadastro? Faça login aqui.
                            </p>
                        </div>
                        <div className={"recovery-password-page__form-zone__action-zone__content__button-zone"}>
                            <BasicButton
                                label={"Entrar"}
                                onClick={LoginButtonClick}
                            />
                        </div>
                    </div>
                </div>
                <div className={"recovery-password-page__form-zone__input-zone"}>
                    <div className={"recovery-password-page__form-zone__input-zone__content"}>
                        <div className={"recovery-password-page__form-zone__input-zone__content__text-zone"}>
                            <p>
                                Recuperar Conta
                            </p>
                        </div>
                        <div className={"recovery-password-page__form-zone__input-zone__content__input-zone"}>
                            <p>
                                Digite seu e-mail para receber o link de redefinição de senha.
                            </p>
                            <LoginInput
                                id={"2"}
                                placeholder={"Email"}
                                onChange={
                                    (event) => setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className={"recovery-password-page__form-zone__input-zone__content__button-zone"}>
                            <BasicButton
                                label={"Enviar Link de Recuperação"}
                                disabled={isButtonDisabled}
                                onClick={RegisterButtonClick}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};