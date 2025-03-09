import {useRef, useState} from "react";
import "./drop-file.css";

export const DropFile = (
    {
        onFileSelect
    }
) => {
    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState(null);
    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setSelectedFileName(file.name);
            onFileSelect(file);
        }
    };

    const removeFile = (event) => {
        event.stopPropagation();
        setSelectedFileName(null);
        fileInputRef.current.value = "";
        onFileSelect(null);
    }

    return (
        <div
            className={
                selectedFileName ?
                    "drop-file drop-file--selected"
                    :
                    "drop-file"
            }
            onClick={handleClick}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                hidden
            />
            <div className={"drop-file__icon-zone"}>
                <i className="bx bxs-cloud-upload"></i>
            </div>
            <div className={"drop-file__text-zone"}>
                <p>
                    {
                        selectedFileName ?
                            selectedFileName
                            :
                            "Clique ou arraste um arquivo aqui para anexar."
                    }
                </p>
                {
                    selectedFileName ?
                        <i
                            className="bx bxs-trash"
                            onClick={(event) => removeFile(event)}
                        >
                        </i>
                        :
                        <>
                        </>
                }

            </div>
        </div>
    );
};