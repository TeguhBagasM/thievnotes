import React from "react";
import Text from "./Text";

export default function MenuCardNote({
    onDeleteNote,
    onArchiveNote,
    archived,
    id,
}) {
    return (
        <div className="wrap-menu-card">
            <Text
                onClick={(e) => onDeleteNote(e, id)}
                style={{
                    marginBottom: 0,
                    color: "#ff5f52",
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #d0d0d0",
                }}
                type="text-action"
            >
                Delete
            </Text>
            <Text
                onClick={(e) => onArchiveNote(e, id)}
                style={{
                    marginBottom: 0,
                    color: "#2d3e50",
                    padding: "10px",
                    cursor: "pointer",
                }}
                type="text-action"
            >
                {archived ? "Unarchive" : "Archive"}
            </Text>
        </div>
    );
}
