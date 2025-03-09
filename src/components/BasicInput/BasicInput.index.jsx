import "./basic-input.css";
import PropTypes from "prop-types";

export const BasicInput = (
    {
        id,
        label,
        placeholder,
        isPassword,
        icon,
        onIconClick,
        ...inputProps
    }
) => {
    return (
        <div className="basic-input">
            {
                label
                && (
                    <label htmlFor={id} className="basic-input__label">
                        {label}
                    </label>
                )
            }
            <div className="basic-input__input-wrapper">
                <input
                    id={id}
                    className="basic-input__input"
                    type={isPassword ? "password" : "text"}
                    placeholder={placeholder}
                    {...inputProps}
                />
                {
                    icon
                    && <div
                        className={`basic-input__icon ${onIconClick ? "basic-input__icon--clickable" : ""}`}
                        onClick={onIconClick}
                    >
                        {icon}
                    </div>
                }
            </div>
        </div>
    );
};

BasicInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    isPassword: PropTypes.bool,
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    onIconClick: PropTypes.func,
};
