import React, { Component } from "react";
import FormEditNote from "./FormEditNote";
import Text from "./Text";

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            description: props.body,
            createdAt: props.createdAt,
            archived: props.archived,
            chartLeft: 50,
        };

        this.onInputEventHandler = this.onInputEventHandler.bind(this);
    }

    onInputEventHandler(event) {
        if (event.target.name === "title" && event.target.value.length > 50)
            return;

        this.setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            chartLeft:
                event.target.name === "title"
                    ? 50 - event.target.value.length
                    : prevState.chartLeft,
        }));
    }

    render() {
        return (
            <>
                <div
                    className="shadow-overlay"
                    onClick={this.props.onOpenEditNote}
                />
                <div className="new-note-wrapper edit-note">
                    <Text
                        type="title-section"
                        style={{ textAlign: "center", marginTop: 0 }}
                    >
                        Edit Catatan
                    </Text>
                    <Text
                        type="paragraph"
                        style={{
                            color:
                                this.state.chartLeft < 4
                                    ? "#ff5f52"
                                    : this.state.chartLeft < 6
                                    ? "rgb(216 198 0)"
                                    : "#71717a",
                            textAlign: "right",
                            marginBottom: "8px",
                            fontWeight: 400,
                        }}
                    >
                        Sisa karakter: {this.state.chartLeft}
                    </Text>
                    <FormEditNote
                        title={this.state.title}
                        description={this.state.description}
                        onInputEventHandler={this.onInputEventHandler}
                        onSubmitEditNote={(event) => {
                            this.props.onSubmitEditNote(event, this.state);
                            this.props.onOpenEditNote();
                        }}
                    />
                </div>
            </>
        );
    }
}
