import React from "react";
import "./styles.css";
// ... Import api fetch/transform helper
// ... Import components

export default function App() {
  return (
    /* 
      Leaving out semantic tags like main/header/footer
      since this as a component context rather than a 
      self standing web app.
    */

    <div className="ImageSearch">
      {/* ... add SearchForm component */}
      {/* ... add SearchResults component */}
      {/* ... add SavedImages component */}
    </div>
  );
}
