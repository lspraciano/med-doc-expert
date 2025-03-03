import "./login-page.css";
import {useNavigate} from "react-router-dom";
import {BasicButton} from "../../components/BasicButton/BasicButton.index.jsx";
import {useState} from "react";
import {BasicCheckbox} from "../../components/BasicCheckbox/BasicCheckbox.index.jsx";
import {BasicInput} from "../../components/BasicInput/BasicInput.index.jsx";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(true);
    const LoginButtonClick = () => {
        navigate("/home");
    };
    const RegisterButtonClick = () => {
        navigate("/register");
    };
    const isButtonDisabled = email.trim() === "" || password.trim() === "";

    return (
        <div className={"login-page"}>
            <div className={"login-page__form-zone"}>
                <div className={"login-page__form-zone__input-zone"}>
                    <div className={"login-page__form-zone__input-zone__content"}>
                        <p>Entrar</p>
                        <div className={"login-page__form-zone__input-zone__content__inputs-zone"}>
                            <BasicInput
                                id={"1"}
                                label={"Email"}
                                placeholder={"Email"}
                                onChange={
                                    (event) => setEmail(event.target.value)
                                }
                            />
                            <BasicInput
                                id={"2"}
                                label={"Senha"}
                                placeholder={"Senha"}
                                isPassword={true}
                                onChange={
                                    (event) => setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className={"login-page__form-zone__input-zone__content__actions-zone"}>
                            <div className={"login-page__form-zone__input-zone__content__actions-zone__link-zone"}>
                                <BasicCheckbox
                                    id={"10"}
                                    label={"Lembrar Senha"}
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                />
                                <a
                                    href={"/reset-password"}
                                >
                                    Esqueceu sua senha?
                                </a>
                            </div>
                            <div className={"login-page__form-zone__input-zone__content__actions-zone__button-zone"}>
                                <BasicButton
                                    label={"Entrar"}
                                    onClick={LoginButtonClick}
                                    disabled={isButtonDisabled}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"login-page__form-zone__register-zone"}>
                    <div className={"login-page__form-zone__register-zone__action-zone"}>
                        <div className={"login-page__form-zone__register-zone__action-zone__text-zone"}>
                            <p>
                                Olá, tudo bem?
                            </p>
                            <p>
                                Preencha seus dados pessoais e
                                embarque nessa jornada com a gente.
                            </p>
                        </div>
                        <div className={"login-page__form-zone__register-zone__action-zone__button-zone"}>
                            <BasicButton
                                label={"Criar Conta"}
                                onClick={RegisterButtonClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};