import "./basic-page-layout.css";

import {useState} from "react";
import {NavBar} from "../NavBar/NavBar.index.jsx";
import {SideBar} from "../SideBar/SideBar.index.jsx";
import PropTypes from "prop-types";


export const BasicPageLayout = (
    {
        title = "",
        children
    }
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <div className={"basic-page-layout"}>
            <div className={"basic-page-layout__navbar-zone"}>
                <NavBar
                    title={title}
                    onMenuToggle={handleToggleMenu}
                />
            </div>
            {
                isMenuOpen
                &&
                <SideBar
                    onClose={handleToggleMenu}
                />
            }
            <div className={"basic-page-layout__content"}>
                {children}
            </div>
        </div>
    );
};

BasicPageLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};