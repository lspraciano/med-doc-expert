import PropTypes from "prop-types";
import "./switch-icon.css";

export const SwitchIcon = (
    {
        iconOne,
        iconTwo,
        onSwitch,
        label,
        value = false,
    }
) => {
    const handleToggle = (event) => {
        event.stopPropagation();
        const newValue = !value;
        if (onSwitch) {
            onSwitch(newValue);
        }
    };

    return (
        <div
            className="switch-icon"
            onClick={handleToggle}
        >
            <div className="switch-icon__icon">
                {
                    value ?
                        iconOne
                        :
                        iconTwo
                }
            </div>
            {
                label
                &&
                <span className="switch-icon__label">
                    {label}
                </span>
            }
        </div>
    );
};

SwitchIcon.propTypes = {
    iconOne: PropTypes.node.isRequired,
    iconTwo: PropTypes.node.isRequired,
    onSwitch: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.bool,
};
