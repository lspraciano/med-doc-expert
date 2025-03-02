import "./login-input.css";

export const LoginInput = (
    {
        id,
        label,
        placeholder,
        ...inputProps
    }
) => {
    return (
        <div className="login-input">
            {
                label && (
                    <label htmlFor={id} className="login-input__label">
                        {label}
                    </label>
                )
            }
            <input
                id={id}
                className="login-input__input"
                {...inputProps}
                placeholder={placeholder}
            />
        </div>
    );
};