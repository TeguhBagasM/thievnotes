import React from "react";

export default function Box({ style, onClick, children }) {
    return (
        <div className="box-wrapper" style={style} onClick={onClick}>
            {children}
        </div>
    );
}
