import "./register-user-page.css";
import {LoginInput} from "../../components/LoginInput/LoginInput.index.jsx";
import {useNavigate} from "react-router-dom";
import {BasicButton} from "../../components/BasicButton/BasicButton.index.jsx";
import {useState} from "react";

export const RegisterUserUserPage = () => {
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
        <div className={"register-user-page"}>
            <div className={"register-user-page__form-zone"}>
                <div className={"register-user-page__form-zone__enter-zone"}>
                    <div className={"register-user-page__form-zone__action-zone__content"}>
                        <div className={"register-user-page__form-zone__action-zone__content__text-zone"}>
                            <p>
                                Entrar
                            </p>
                            <p>
                                Já possui cadastro? Faça login aqui.
                            </p>
                        </div>
                        <div className={"register-user-page__form-zone__action-zone__content__button-zone"}>
                            <BasicButton
                                label={"Entrar"}
                                onClick={LoginButtonClick}
                            />
                        </div>
                    </div>
                </div>
                <div className={"register-user-page__form-zone__input-zone"}>
                    <div className={"register-user-page__form-zone__input-zone__content"}>
                        <div className={"register-user-page__form-zone__input-zone__content__text-zone"}>
                            <p>
                                Cadastrar Conta
                            </p>
                        </div>
                        <div className={"register-user-page__form-zone__input-zone__content__input-zone"}>
                            <p>
                                Informe um e-mail válido para registrar sua conta.
                            </p>
                            <LoginInput
                                id={"2"}
                                placeholder={"Email"}
                                onChange={
                                    (event) => setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className={"register-user-page__form-zone__input-zone__content__button-zone"}>
                            <BasicButton
                                label={"Criar Conta"}
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