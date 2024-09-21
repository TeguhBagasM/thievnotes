import React from "react";
import "../styles/text.css";

export default function Text({ type, style, children, onClick }) {
    switch (type) {
        case "title-page":
            return (
                <h1 onClick={onClick} className={type} style={style}>
                    {children}
                </h1>
            );
        case "title-section":
            return (
                <h2 onClick={onClick} className={type} style={style}>
                    {children}
                </h2>
            );
        case "title-note":
            return (
                <h3 onClick={onClick} className={type} style={style}>
                    {children}
                </h3>
            );
        case "paragraph":
            return (
                <p onClick={onClick} className={type} style={style}>
                    {children}
                </p>
            );
        case "text-note":
            return (
                <p onClick={onClick} className={type} style={style}>
                    {children}
                </p>
            );
        case "text-date":
            return (
                <p onClick={onClick} className={type} style={style}>
                    {children}
                </p>
            );
        case "button-action":
            return (
                <h4 onClick={onClick} className={type} style={style}>
                    {children}
                </h4>
            );
        case "text-action":
            return (
                <h4 onClick={onClick} className={type} style={style}>
                    {children}
                </h4>
            );
        case "text-filter":
            return (
                <h4 onClick={onClick} className={type} style={style}>
                    {children}
                </h4>
            );
        default:
            return (
                <h3 onClick={onClick} style={style}>
                    {children}
                </h3>
            );
    }
}
