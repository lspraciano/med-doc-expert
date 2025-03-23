import "./basci-alert.css";
import PropTypes from "prop-types";

const iconMap = {
    success: <i className="bx bxs-check-circle"></i>,
    error: <i className='bx bxs-error-circle'></i>,
    warning: <i className='bx bxs-error'></i>,
    info: <i className='bx bxs-error-circle bx-rotate-180'></i>,
};

const titleMap = {
    success: "Sucesso",
    error: "Error",
    warning: "Alerta",
    info: "Info",
};

const getAlertClasses = (visible, type) => {
    const classes = ["basic-alert"];

    if (visible) classes.push("basic-alert--visible");
    if (type) classes.push(`basic-alert--${type}`);

    return classes.join(" ");
};


export const BasicAlert = (
    {
        message,
        visible,
        type
    }
) => {
    return (
        <div className={getAlertClasses(visible, type)}>
            <div className={"basic-alert__text-zone"}>
                <p className={"basic-alert__text-zone__title"}>
                    {
                        titleMap[type]
                    }
                </p>
                <p className={"basic-alert__text-zone__message"}>
                    {
                        message
                    }
                </p>

            </div>
            <div className={"basic-alert__icon-zone"}>
                {
                    iconMap[type]
                }
            </div>
        </div>
    );
};

BasicAlert.propTypes = {
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(["success", "error", "info", "warning"]).isRequired,
};