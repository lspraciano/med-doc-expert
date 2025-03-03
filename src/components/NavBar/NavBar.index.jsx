import "./navbar.css";
import PropTypes from "prop-types";

export const NavBar = (
    {
        title = "Home",
        onMenuToggle
    }
) => {
    return (
        <div className={"navbar"}>
            <div
                className={"navbar__menu-icon-zone"}
                onClick={onMenuToggle}
            >
                <i className='bx bx-menu'></i>
                <p className={"navbar__menu-icon-zone__title"}>
                    {title}
                </p>
            </div>
            <div className={"navbar__buttons-zone"}>
                <i className='bx bxs-cog'></i>
                <i className='bx bxs-user-circle'></i>
            </div>
        </div>
    );
};


NavBar.propTypes = {
    title: PropTypes.string,
    onMenuToggle: PropTypes.func,
};
