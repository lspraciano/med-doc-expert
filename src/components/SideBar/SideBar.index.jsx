import "./sidebar.css";
import PropTypes from "prop-types";
import logo from "./logo.png";
import {SideBarItem} from "./SideBarItem/SideBarItem.index.jsx";
import {menuItems} from "./menu-items.js";

export const SideBar = (
    {
        onClose,
        isActive
    }
) => {
    return (
        <div
            className={`sidebar ${isActive ? " sidebar--active" : ""}`}
            onClick={onClose}
        >
            <div className={"sidebar__head"}>
                <div className={"sidebar__head__logo-zone"}>
                    <img
                        src={logo}
                        alt="logo da empresa"
                    />
                </div>
                <div className={"sidebar__head__line-zone"}>
                </div>
            </div>
            <div className={"sidebar__body"}>
                {
                    menuItems.map(
                        (item, index) => {
                            return <SideBarItem
                                headTitle={item.headTitle}
                                headIcon={item.headIcon}
                                subitems={item.subItems}
                                key={item.headTitle + index}
                            />
                        }
                    )
                }
            </div>
            <div className={"sidebar__footer"}>
                <div className={"sidebar__footer__close-zone"}>
                    <i className='bx bx-log-out'></i>
                    <p>Sair</p>
                </div>

            </div>
        </div>
    );
};

SideBar.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
};