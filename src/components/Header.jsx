import React from "react";
import Quotes from "./Quotes";
import SearchBox from "./SearchBox";
import Text from "./Text";

export default function Header({ onSearchNote, keyword, author, text }) {
  return (
    <div className="header-wrapper">
      <Text type="title-page">Personal Notes</Text>
      <Quotes author={author} text={text} />
      <SearchBox keyword={keyword} onSearch={onSearchNote} />
    </div>
  );
}
