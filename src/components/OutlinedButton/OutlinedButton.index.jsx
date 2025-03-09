import PropTypes from "prop-types";
import "./outlined-buton.css";

export const OutlinedButton = (
    {
        label,
        onClick,
        disabled = false,
        ...inputProps
    }
) => {
    let modifiedClasses = "";

    if (disabled) {
        modifiedClasses = modifiedClasses + " outlined-button--disabled ";
    }


    return (
        <div className={`outlined-button ${modifiedClasses}`}
             onClick={onClick}
        >
            <button
                type={"button"}
                className={"outlined-button__button"}
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

OutlinedButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
};
