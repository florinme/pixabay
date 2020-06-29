import React from "react";
import { ReactComponent as LinkIcon } from "../link.svg";

export default function SavedImages({
  savedResults,
  savedError,
  savedStatus,
  clearSaved
}) {
  return (
    <div className="SavedImages FlexWrapper FlexWrapper__column">
      <h3 className="SavedImages_title">Saved</h3>
      {/* 
        If there's an error when saving, show it, othwise check for any results, 
        if so map them, otherwise show a "no saved images" notice.
      */}
      {savedError
        ? savedError
        : !!savedResults.length
        ? savedResults.map((image, i) => (
            <LinkItem key={`${image.id}-${i}`} image={image} />
          ))
        : "No saved images"}
      {savedStatus === "Fetching" && (
        <span className="SavedImages_loadText">Loading ...</span>
      )}
      <button
        onClick={clearSaved}
        className="SavedImages_clearButton"
        type="reset"
      >
        Clear all
      </button>
    </div>
  );
}

function LinkItem({ image }) {
  return (
    <div className="SavedImages_link">
      <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer">
        {image.id}
        <LinkIcon className="SavedImages_link_icon" />
      </a>
    </div>
  );
}
