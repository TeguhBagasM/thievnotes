import React from "react";
import Text from "./Text";

export default function FilterButton({
    value,
    onSetFilterNotes,
    currentFilter,
    children,
    style,
}) {
    return (
        <div
            onClick={() => onSetFilterNotes(value)}
            className={`filter-button ${
                currentFilter === value ? "active" : ""
            }`}
            style={style}
        >
            <Text
                type="text-filter"
                style={{ color: currentFilter === value ? "#fff" : "#2d2d2d" }}
            >
                {children}
            </Text>
        </div>
    );
}
