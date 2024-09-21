import React from "react";
import "../styles/loader.css";

export default function Loader() {
    return (
        <div
            className="loader-wrapper"
            style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                height: "400px",
                marginTop: "1em",
            }}
        >
            <div className="lmns lmns-loader three-wavy-balls">
                <span />
                <span />
                <span />
            </div>
        </div>
    );
}
