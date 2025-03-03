import PropTypes from "prop-types";
import "./basic-checkbox.css";

export const BasicCheckbox = (
    {
        id,
        label,
        ...checkboxProps
    }
) => {
    return (
        <div className="basic-checkbox">
            <input
                id={id}
                type="checkbox"
                className="basic-checkbox__input"
                {...checkboxProps}
            />
            {
                label && (
                    <label htmlFor={id} className="basic-checkbox__label">
                        {label}
                    </label>
                )
            }
        </div>
    );
};

BasicCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
