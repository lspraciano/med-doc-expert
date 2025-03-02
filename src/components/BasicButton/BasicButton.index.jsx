import PropTypes from "prop-types";
import "./basic-buton.css";

export const BasicButton = (
    {
        label,
        onClick,
        disabled = false,
        ...inputProps
    }
) => {
    let modifiedClasses = "";

    if (disabled) {
        modifiedClasses = modifiedClasses + " basic-button--disabled ";
    }


    return (
        <div className={`basic-button ${modifiedClasses}`}
             onClick={onClick}
        >
            <button
                type={"button"}
                className={"basic-button__button"}
                disabled={disabled}
                {...inputProps}
            >
                <p>
                    {label}
                </p>
            </button>
        </div>
    );
};

BasicButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
};
