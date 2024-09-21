import React from "react";
import ButtonAction from "./ButtonAction";

export default function FormNewNote({ title, description, onInputEventHandler, onSubmitNewNote }) {
  return (
    <form onSubmit={onSubmitNewNote} className="form-wrapper">
      <input
        type="text"
        value={title}
        name="title"
        placeholder="Masukkan judul catatan..."
        onChange={(event) => onInputEventHandler(event)}
        required
        autoFocus
        className="p-2"
      />
      <textarea
        type="text"
        value={description}
        name="description"
        placeholder="Masukkan deskripsi catatan..."
        onChange={(event) => onInputEventHandler(event)}
        required
        className="p-2"
      />
      <ButtonAction type="submit" title={title} description={description} isPrimary>
        Buat Catatan
      </ButtonAction>
    </form>
  );
}
