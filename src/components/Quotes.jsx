import React from "react";
import Text from "./Text";

export default function Quotes({ text, author }) {
    return (
        <div className="quotes-wrapper">
            <Text
                type="paragraph"
                style={{ fontSize: "16px", color: "#878792" }}
            >
                {text}
            </Text>
            <Text
                type="title-note"
                style={{ color: "#878792", lineHeight: "24px", margin: 0 }}
            >
                -
            </Text>
            <Text
                type="text-date"
                style={{ color: "#3F3F45", fontSize: "14px", fontWeight: 600 }}
            >
                {author}
            </Text>
        </div>
    );
}
