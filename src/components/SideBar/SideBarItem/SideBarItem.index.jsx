import "./sidebar-item.css";
import PropTypes from "prop-types";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const SideBarItem = (
    {
        headTitle,
        headIcon,
        subitems,
        path
    }
) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleExpand = (event) => {
        event.stopPropagation();
        setIsExpanded((prev) => !prev);
    };

    const toggleRedirect = (event) => {
        event.stopPropagation();
        if (path) {
            navigate(path);
            console.log("navigate to: ", path);
        }
    };

    const navigateToSubItemPath = (event, subItemPath) => {
        event.stopPropagation();
        navigate(subItemPath);
        console.log("navigate to: ", subItemPath);
    };

    return (
        <div
            className={`sidebar-item ${isExpanded ? "sidebar-item--is-open" : ""}`}
        >
            <div
                className={"sidebar-item__head"}
                onClick={
                    subitems.length === 0 ?
                        toggleRedirect
                        :
                        toggleExpand
                }
            >
                <div className="sidebar-item__head__icon-zone">
                    <i className={headIcon}></i>
                    <p>{headTitle}</p>
                </div>
                {
                    subitems.length === 0 ?
                        <></>
                        :
                        <div className="sidebar-item__head__arrow-zone">
                            <i className={`bx ${isExpanded ? "bx-chevron-down" : "bx-chevron-right"}`}></i>
                        </div>
                }

            </div>
            {
                isExpanded && (
                    <div className="sidebar-item__body">
                        {
                            subitems.map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="sidebar-item__body__icon-zone"
                                        onClick={
                                            (event) => navigateToSubItemPath(
                                                event, item.path
                                            )
                                        }
                                    >
                                        <i className={item.icon}></i>
                                        <p>{item.title}</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

SideBarItem.propTypes = {
    headTitle: PropTypes.string.isRequired,
    headIcon: PropTypes.string,
    subItems: PropTypes.arrayOf(
        PropTypes.shape(
            {
                title: PropTypes.string.isRequired,
                icon: PropTypes.string,
                path: PropTypes.string,
            }
        )
    ),
    path: PropTypes.string,
};