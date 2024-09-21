import React from "react";
import Quotes from "./Quotes";
import SearchBox from "./SearchBox";
import Text from "./Text";
import { LogOut } from "lucide-react";

export default function Header({ onSearchNote, keyword, author, text }) {
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="header-wrapper">
      <div className="flex md:flex-row items-center justify-center p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <Text type="title-page" className="text-white text-2xl md:text-4xl">
            Personal Notes
          </Text>

          <button
            className="ml-4 flex items-center text-gray-900 hover:bg-gray-200 py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            onClick={handleLogout}
          >
            <LogOut className="mr-2" />
            Keluar
          </button>
        </div>
      </div>

      <Quotes author={author} text={text} />
      <SearchBox keyword={keyword} onSearch={onSearchNote} />
    </div>
  );
}
