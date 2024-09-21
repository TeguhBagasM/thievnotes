import React from "react";
import ButtonAction from "./ButtonAction";

export default function FormNewNote({
    title,
    description,
    onInputEventHandler,
    onSubmitEditNote,
}) {
    return (
        <form onSubmit={onSubmitEditNote} className="form-wrapper">
            <input
                type="text"
                value={title}
                name="title"
                onChange={(event) => onInputEventHandler(event)}
                required
                autoFocus
            />
            <textarea
                type="text"
                value={description}
                name="description"
                onChange={(event) => onInputEventHandler(event)}
                required
            />
            <ButtonAction type="submit" title={title} description={description} isPrimary>
                Edit Catatan
            </ButtonAction>
        </form>
    );
}
