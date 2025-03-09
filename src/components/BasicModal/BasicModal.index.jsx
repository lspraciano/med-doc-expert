import "./basic-modal.css";
import PropTypes from "prop-types";

export const BasicModal = (
    {
        isOpen,
        children
    }
) => {
    if (!isOpen) return null;

    return (
        <div className="basic-modal">
            <div className="basic-modal__content">
                {children}
            </div>
        </div>
    );
};

BasicModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};