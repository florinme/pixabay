import React from "react";
import "./styles.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SavedImages from "./components/SavedImages";

// ... Import api fetch/transform helper
// ... Import components

export default function App() {
  return (
    /* 
    ... Add handlers ...
    */

    /* 
      Leaving out semantic tags like main/header/footer
      since this as a component context rather than a 
      self standing web app.
    */

    <div className="ImageSearch FlexWrapper FlexWrapper__row FlexWrapper__gutter">
      <div className="ImageSearch_leftPanel FlexItem">
        <div className="FlexWrapper FlexWrapper__column FlexWrapper__gutter">
          <div className="FlexItem">
            <SearchForm />
          </div>
          <div className="FlexItem">
            <SearchResults />
          </div>
        </div>
      </div>
      <div className="ImageSearch_rightPanel FlexItem">
        <SavedImages />
      </div>
    </div>
  );
}
