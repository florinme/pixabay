import React from "react";
import { CATEGORIES } from "../utils/categories";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="FlexWrapper FlexWrapper__column" method="post" action="">
        <input
          className="FlexItem"
          type="search"
          id="search"
          placeholder="Keyword"
          required
        />
        <select className="FlexItem" id="categories">
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
        <button clasName="FlexItem" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
