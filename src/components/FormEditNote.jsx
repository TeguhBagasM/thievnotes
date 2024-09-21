import React from "react";
import ButtonAction from "./ButtonAction";

export default function FormNewNote({ title, description, onInputEventHandler, onSubmitEditNote }) {
  return (
    <form onSubmit={onSubmitEditNote} className="form-wrapper">
      <input
        type="text"
        value={title}
        name="title"
        onChange={(event) => onInputEventHandler(event)}
        required
        autoFocus
        className="p-2"
      />
      <textarea
        type="text"
        value={description}
        name="description"
        onChange={(event) => onInputEventHandler(event)}
        required
        className="p-2"
      />
      <ButtonAction type="submit" title={title} description={description} isPrimary>
        Edit Catatan
      </ButtonAction>
    </form>
  );
}
