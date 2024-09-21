import React, { Component } from "react";
import { generateQuotes, getFilter, getInitialData } from "../utils";
import ButtonAddNewNote from "./ButtonAddNewNote";
import DetailNote from "./DetailNote";
import FilterWrapper from "./FilterWrapper";
import Header from "./Header";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import WrapCardNote from "./WrapCardNote";
import Footer from "./Footer";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      displayNotes: getInitialData(),
      detailNote: {},
      filterNote: "all",
      textEmpty: "Kamu Belum Memiliki Catatan",
      keyword: "",
      quotes: {},
      isAddNote: false,
      isEditNote: false,
      isOpenNote: false,
      idMenuActive: null,
      isLoading: true,
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.searchNotesByKeyword = this.searchNotesByKeyword.bind(this);
    this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this);
    this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
    this.onOpenAddNoteHandler = this.onOpenAddNoteHandler.bind(this);
    this.onOpenEditNoteHandler = this.onOpenEditNoteHandler.bind(this);
    this.onOpenMenuNoteHandler = this.onOpenMenuNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSetFilterNotesHandler = this.onSetFilterNotesHandler.bind(this);
    this.onOpenDetailNoteHandler = this.onOpenDetailNoteHandler.bind(this);
    this.generateRandomQuotes = this.generateRandomQuotes.bind(this);
    this.setTimeLoading = this.setTimeLoading.bind(this);
  }

  onSearchNoteHandler(event) {
    const keyword = event.target.value;
    this.setTimeLoading(1000);

    if (keyword.length === 0) return this.onSetFilterNotesHandler(this.state.filterNote);

    const searchNotes = this.state.displayNotes.filter((note) =>
      this.searchNotesByKeyword(note.title, keyword)
    );

    this.setState((prevState) => ({
      ...prevState,
      keyword,
      displayNotes: searchNotes,
      textEmpty:
        keyword.length > 0 ? "Catatan Yang Dicari Tidak Ditemukan" : "Kamu Belum Memiliki Catatan",
    }));
  }

  searchNotesByKeyword(title, keyword) {
    for (let i = 0; i < keyword.length; i++) {
      if (keyword[i].toLowerCase() !== title[i].toLowerCase()) return false;
    }
    return true;
  }

  onAddNewNoteHandler(event, note) {
    event.preventDefault();
    this.setTimeLoading(1000);

    this.setState((prevState) => ({
      ...prevState,
      notes: [
        ...prevState.notes,
        {
          id: prevState.notes.length + 1,
          title: note.title,
          body: note.description,
          createdAt: new Date(),
          archived: false,
        },
      ],
      keyword: "",
    }));
  }

  onOpenAddNoteHandler() {
    this.setState((prevState) => ({
      ...prevState,
      isAddNote: !prevState.isAddNote,
    }));
  }

  onEditNoteHandler(event, note) {
    event.preventDefault();
    const notes = this.state.notes.filter((prevNote) => prevNote.id !== note.id);
    this.setTimeLoading(1000);

    this.setState((prevState) => ({
      ...prevState,
      notes: [
        ...notes,
        {
          id: note.id,
          title: note.title,
          body: note.description,
          createdAt: note.createdAt,
          archived: note.archived,
        },
      ],
      keyword: "",
    }));
  }

  onOpenEditNoteHandler() {
    this.setState((prevState) => ({
      ...prevState,
      isEditNote: !prevState.isEditNote,
      isOpenNote: false,
    }));
  }

  onOpenMenuNoteHandler(event, id) {
    event.stopPropagation();

    this.setState((prevState) => ({
      ...prevState,
      idMenuActive: prevState.idMenuActive === id ? null : id,
    }));
  }

  onDeleteNoteHandler(event, id) {
    event.stopPropagation();
    this.setTimeLoading(1000);

    const noteAfterDelete = this.state.notes.filter((note) => note.id !== id);
    this.setState((prevState) => ({
      ...prevState,
      notes: noteAfterDelete,
    }));
  }

  onArchiveNoteHandler(event, id) {
    event.stopPropagation();
    const noteAfterArchive = this.state.notes.map((note) => ({
      ...note,
      archived: note.id === id ? !note.archived : note.archived,
    }));
    this.setState((prevState) => ({
      ...prevState,
      notes: noteAfterArchive,
      idMenuActive: null,
    }));
  }

  onSetFilterNotesHandler(filter) {
    this.setTimeLoading(1000);

    let filterNotes = [];
    let textEmpty = "";

    switch (filter) {
      case "active":
        filterNotes = this.state.notes.filter((note) => !note.archived);
        textEmpty = "Tidak Ada Catatan Aktif Saat Ini";
        break;
      case "archived":
        filterNotes = this.state.notes.filter((note) => note.archived);
        textEmpty = "Tidak Ada Catatan Diarsipkan Saat Ini";
        break;
      default:
        filterNotes = this.state.notes.sort(
          (prevNote, currNote) => Number(currNote.archived) - Number(prevNote.archived)
        );
        textEmpty = "Kamu Belum Memiliki Catatan Saat Ini";
    }

    this.setState((prevState) => ({
      ...prevState,
      displayNotes: filterNotes,
      filterNote: filter,
      textEmpty,
      keyword: "",
    }));
  }

  onOpenDetailNoteHandler(id) {
    if (id === null) {
      return this.setState((prevState) => ({
        ...prevState,
        detailNote: {},
        isOpenNote: false,
      }));
    }

    const detailNote = this.state.notes.filter((note) => note.id === id)[0];
    this.setState((prevState) => ({
      ...prevState,
      detailNote,
      isOpenNote: true,
    }));
  }

  generateRandomQuotes() {
    const allQuotes = generateQuotes();
    const quotes = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    this.setState((prevState) => ({
      ...prevState,
      quotes,
    }));
  }

  setTimeLoading(miliseconds) {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }, miliseconds);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.onSetFilterNotesHandler(this.state.filterNote);
    }
  }

  componentDidMount() {
    this.onSetFilterNotesHandler(this.state.filterNote);
    this.generateRandomQuotes();
  }

  render() {
    return (
      <>
        {this.state.isAddNote && (
          <NewNote
            onSubmitNewNote={this.onAddNewNoteHandler}
            onOpenAddNote={this.onOpenAddNoteHandler}
          />
        )}
        {this.state.isEditNote && (
          <EditNote
            {...this.state.detailNote}
            onSubmitEditNote={this.onEditNoteHandler}
            onOpenEditNote={this.onOpenEditNoteHandler}
          />
        )}
        {this.state.isOpenNote && (
          <DetailNote
            onOpenDetailNote={this.onOpenDetailNoteHandler}
            onEditNote={this.onOpenEditNoteHandler}
            {...this.state.detailNote}
          />
        )}
        <div className="container-wrapper">
          <Header
            keyword={this.state.keyword}
            onLogout={this.handleLogout}
            onSearchNote={this.onSearchNoteHandler}
            {...this.state.quotes}
          />
          <div className="body-wrapper">
            <FilterWrapper
              filters={getFilter()}
              currentFilter={this.state.filterNote}
              onSetFilterNotes={this.onSetFilterNotesHandler}
            />
            <WrapCardNote
              textEmpty={this.state.textEmpty}
              loading={this.state.isLoading}
              notes={this.state.displayNotes}
              onOpenDetailNote={this.onOpenDetailNoteHandler}
              onDeleteNote={this.onDeleteNoteHandler}
              onArchiveNote={this.onArchiveNoteHandler}
              onOpenMenuNote={this.onOpenMenuNoteHandler}
              idMenuActive={this.state.idMenuActive}
            />
          </div>
          <Footer />
          <ButtonAddNewNote onClick={this.onOpenAddNoteHandler} />
        </div>
      </>
    );
  }
}
