import PropTypes from "prop-types";
import "./circular-checkbox.css";

export const CircularCheckbox = (
    {
        id,
        label,
        ...checkboxProps
    }
) => {
    return (
        <div className="circular-checkbox">
            <input
                id={id}
                type="checkbox"
                className="circular-checkbox__input"
                {...checkboxProps}
                disabled={true}
            />
            {
                label && (
                    <label htmlFor={id} className="circular-checkbox__label">
                        {label}
                    </label>
                )
            }
        </div>
    );
};

CircularCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
