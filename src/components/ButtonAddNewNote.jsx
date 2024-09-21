import React from "react";

export default function ButtonAddNewNote({ onClick }) {
    return (
        <div className="icon-wrapper" onClick={onClick}>
            <img
                className="add-new-note-icon"
                src="assets/plus.png"
                alt="Add New Note"
            />
        </div>
    );
}
