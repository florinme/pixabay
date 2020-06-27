import React from "react";
import { CATEGORIES } from "../utils/categories";

export default function SearchForm() {
  return (
    <form
      className="SearchForm FlexWrapper FlexWrapper__column FlexWrapper__gutter"
      method="post"
      action=""
    >
      <input
        className="SearchForm_input FlexItem"
        type="search"
        id="search"
        placeholder="Keyword"
        required
      />
      <select className="SearchForm_input FlexItem" id="select">
        <option value="" selected>
          Category
        </option>
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
