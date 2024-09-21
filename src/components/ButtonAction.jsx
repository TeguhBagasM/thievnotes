import React from "react";

export default function ButtonAction({
  type,
  title,
  description,
  onClick,
  style,
  children,
  isPrimary,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      disabled={type === "submit" && (title === "" || description === "")}
      className={`${isPrimary ? "button-submit" : "button-secondary"}`}
    >
      {children}
    </button>
  );
}
