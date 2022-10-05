import React from "react";
import { MdOutlineCancel } from "react-icons/md";

function SearchBar({ onChange, setValue, value, name, onKeyDown }) {
  function handleClick() {
    setValue("");
  }

  return (
    <div className="border-solid border flex items-center p-3 w-56 bg-white rounded border-gray ">
      <input
        type="text"
        name={name}
        className="w-full"
        placeholder="Search with Search Bar"
        onChange={(e) => onChange(e)}
        value={value}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <button className="text-purple" onClick={handleClick}>
        <MdOutlineCancel />
      </button>
    </div>
  );
}

SearchBar.defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
};

export default SearchBar;
