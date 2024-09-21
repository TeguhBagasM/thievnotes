import React from "react";

export default function LinkExternal({link, children}) {
    return (
        <a
            href={link}
            style={{
                fontWeight: 600,
                textDecoration: "none",
            }}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}
