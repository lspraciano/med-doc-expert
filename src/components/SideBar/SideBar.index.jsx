import "./sidebar.css";
import PropTypes from "prop-types";

export const SideBar = (
    {
        onClose
    }
) => {
    return (
        <div
            className={"sidebar"}
            onClick={onClose}
        >
        </div>
    );
};

SideBar.propTypes = {
    onClose: PropTypes.func,
};