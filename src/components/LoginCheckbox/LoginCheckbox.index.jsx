import PropTypes from "prop-types";
import "./login-checkbox.css";

export const LoginCheckbox = (
    {
        id,
        label,
        ...checkboxProps
    }
) => {
    return (
        <div className="login-checkbox">
            <input
                id={id}
                type="checkbox"
                className="login-checkbox__input"
                {...checkboxProps}
            />
            {
                label && (
                    <label htmlFor={id} className="login-checkbox__label">
                        {label}
                    </label>
                )
            }
        </div>
    );
};

LoginCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
