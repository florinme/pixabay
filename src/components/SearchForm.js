import React, { useRef } from "react";
import { CATEGORIES } from "../utils/categories";

export default function SearchForm({ onSearch }) {
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  return (
    <form
      className="SearchForm FlexWrapper FlexWrapper__column FlexWrapper__gutter"
      onSubmit={e => {
        return (
          e.preventDefault(),
          onSearch(
            inputRef.current ? inputRef.current.value : "",
            selectRef.current ? selectRef.current.value : ""
          )
        );
      }}
    >
      <input
        className="SearchForm_input FlexItem"
        type="search"
        id="search"
        placeholder="Keyword"
        required
        ref={inputRef}
      />
      <select
        className="SearchForm_input FlexItem"
        id="select"
        ref={selectRef}
        defaultValue=""
      >
        <option value="">Category</option>
        {CATEGORIES.map((category, i) => {
          return (
            <option key={i} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <button className="SearchForm_button FlexItem" id="button" type="submit">
        Search
      </button>
    </form>
  );
}
