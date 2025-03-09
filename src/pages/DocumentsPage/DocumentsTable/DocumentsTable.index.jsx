import "./documents-table.css";
import PropTypes from "prop-types";
import {SwitchIcon} from "../../../components/SwitchIcon/SwitchIcon.index.jsx";

export const DocumentsTable = (
    {
        data,
        onEdit
    }
) => {
    return (
        <table className="document-table">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Versão</th>
                <th>Ação</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(
                    (row, index) => (
                        <tr
                            key={index}
                        >
                            <td>{row.name}</td>
                            <td>{row.type}</td>
                            <td>{row.version}</td>
                            <td>
                                <SwitchIcon
                                    iconOne={
                                        <i className="bx bxs-toggle-left"></i>
                                    }
                                    iconTwo={
                                        <i className="bx bxs-toggle-right"></i>
                                    }
                                />
                                <button
                                    onClick={
                                        () => onEdit(row.id)
                                    }
                                    className="action-btn"
                                >
                                    <i className="bx bx-edit"></i>
                                </button>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    );
};

DocumentsTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number,
                name: PropTypes.string,
                type: PropTypes.string,
                version: PropTypes.string,
            }
        )
    ).isRequired,
    onEdit: PropTypes.func.isRequired
};