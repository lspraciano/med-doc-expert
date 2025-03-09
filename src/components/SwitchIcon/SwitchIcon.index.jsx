import React, {useState} from "react";
import PropTypes from "prop-types";
import "./switch-icon.css";

export const SwitchIcon = (
    {
        iconOne,
        iconTwo,
        onSwitch,
        label,
        initialState = false,
    }
) => {

    const [isSwitched, setIsSwitched] = useState(initialState);

    const handleToggle = (event) => {
        event.stopPropagation();
        const newState = !isSwitched;
        setIsSwitched(newState);
        if (onSwitch) {
            onSwitch(newState);
        }
    };

    return (
        <div
            className="switch-icon"
            onClick={handleToggle}
        >
            <div className="switch-icon__icon">
                {
                    isSwitched ?
                        iconTwo
                        :
                        iconOne
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
    initialState: PropTypes.bool,
};
