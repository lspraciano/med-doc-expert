import "./basic-input.css";
import PropTypes from "prop-types";

export const BasicInput = (
    {
        id,
        label,
        placeholder,
        ...inputProps
    }
) => {
    return (
        <div className="basic-input">
            {
                label && (
                    <label htmlFor={id} className="basic-input__label">
                        {label}
                    </label>
                )
            }
            <input
                id={id}
                className="basic-input__input"
                {...inputProps}
                placeholder={placeholder}
            />
        </div>
    );
};

BasicInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};