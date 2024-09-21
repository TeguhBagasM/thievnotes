import React from "react";
import CardNote from "./CardNote";
import EmptyNotes from "./EmptyNotes";
import Loader from "./Loader";

export default function WrapCardNote({
    loading,
    textEmpty,
    notes,
    idMenuActive,
    onOpenDetailNote,
    onOpenMenuNote,
    onDeleteNote,
    onArchiveNote,
}) {
    return (
        <>
            {loading ? (
                <Loader />
            ) : notes.length === 0 ? (
                <EmptyNotes>{textEmpty}</EmptyNotes>
            ) : (
                <div className="wrapper-box-notes">
                    {notes.map((note) => (
                        <CardNote
                            key={note.id}
                            {...note}
                            idMenuActive={idMenuActive}
                            onOpenDetailNote={onOpenDetailNote}
                            onOpenMenuNote={onOpenMenuNote}
                            onDeleteNote={onDeleteNote}
                            onArchiveNote={onArchiveNote}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
