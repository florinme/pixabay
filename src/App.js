import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SavedImages from "./components/SavedImages";
import { getSearchResults, getImage } from "./utils/api";

export default function App() {
  const [searchStatus, setSearchStatus] = useState("");
  const [savedStatus, setSavedStatus] = useState("");
  const [searchError, setSearchError] = useState("");
  const [savedError, setSavedError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [savedResults, setSavedResults] = useState([]);
  const [savedImages, setSavedImages] = useState([]);

  // Check for cached image id's and set them to state for more efficient handling
  useEffect(() => {
    const cachedImageIds = localStorage.getItem("savedImages")
      ? localStorage.getItem("savedImages").split(" ")
      : [];
    if (cachedImageIds.length) {
      setSavedImages(cachedImageIds);
      getImages(cachedImageIds);
    }
  }, []);

  // Fetch individual images by local storage id or on demand
  // Would also be useful for adding a thumbnails to the right pane
  async function getImages(ids) {
    setSavedStatus("Fetching");
    ids.forEach(async id => {
      try {
        const result = await getImage(id);
        setSavedStatus("Done");
        setSavedResults(prevSavedResults => [...prevSavedResults, ...result]);
      } catch (error) {
        setSavedStatus("Error");
        setSavedError(error.msg ? error.msg : "Getting the image failed");
        !error.msg && console.log("Failed Image Fetch: ", error);
      }
    });
  }

  // Main search query
  async function onSearch(searchQuery, searchCategory) {
    setSearchStatus("Fetching");

    try {
      const result = await getSearchResults(
        searchQuery,
        searchCategory,
        savedImages
      );
      setSearchStatus("Done");
      setSearchResults(result);
    } catch (error) {
      setSearchStatus("Error");
      setSearchError(error.msg ? error.msg : "The search failed");
      !error.msg && console.log("Search Failed: ", error);
    }
  }

  function onSave(id) {
    const newSavedImages = [...savedImages];
    const savedImageId = id.toString().split();
    newSavedImages.push(id);
    localStorage.setItem("savedImages", newSavedImages.join(" "));
    setSavedImages(newSavedImages);
    getImages(savedImageId);
  }

  function clearSaved() {
    localStorage.clear();
    setSavedImages([]);
    setSavedResults([]);
    setSearchResults([]);
  }

  return (
    /* 
      Leaving out semantic tags like main/header/footer
      since the context is a component rather than a 
      self standing web app.
    */

    <div className="ImageSearch FlexWrapper FlexWrapper__row FlexWrapper__gutter">
      <div className="ImageSearch_leftPanel FlexItem">
        <div className="FlexWrapper FlexWrapper__column FlexWrapper__gutter">
          <div className="FlexItem">
            <SearchForm onSearch={onSearch} />
          </div>
          <div className="FlexItem">
            {/* Basic front end error handling and user notifications */}
            {searchStatus === "Fetching" && "Searching for images..."}
            {searchStatus === "Error" && searchError}
            {searchStatus === "Done" && (
              <SearchResults searchResults={searchResults} onSave={onSave} />
            )}
          </div>
        </div>
      </div>

      {/* Only showing this pane if there are items saved */}
      {!!savedResults.length && (
        <div className="ImageSearch_rightPanel FlexItem">
          <SavedImages
            savedResults={savedResults}
            savedStatus={savedStatus}
            savedError={savedError}
            clearSaved={clearSaved}
          />
        </div>
      )}
    </div>
  );
}
