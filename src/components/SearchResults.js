import React from "react";
import { ReactComponent as LikesIcon } from "../like.svg";
import { ReactComponent as StarsIcon } from "../star.svg";

export default function SearchResults({ searchResults, onSave }) {
  return (
    <div className="SearchResults FlexWrapper FlexWrapper__column">
      {searchResults.map(image => (
        <Card key={image.id} image={image} onSave={onSave} />
      ))}
    </div>
  );
}

function Card({ image, onSave }) {
  return (
    <div className="Card FlexItem FlexWrapper FlexWrapper__row FlexWrapper__gutter">
      <button
        onClick={() => {
          onSave(image.id);
          /* 
          Next line mutates a prop and will re-render the component. I want to acknowledge that since it is not 
          best practice, there is an opportunity for improvement here on how image saved states are handled 
          */
          image.saved = !image.saved;
        }}
        className="ImageButton FlexItem"
        type="submit"
      >
        <img
          className="Card_img FlexItem"
          src={image.webformatURL}
          alt={`${image.type} tagged: ${image.tags}`}
        />
        <div
          className={`SaveNotice ${
            image.saved ? "SaveNotice__saved" : "SaveNotice__unsaved"
          } FlexItem`}
        >
          {image.saved ? "Unsave" : "Save"}
        </div>
      </button>
      <div className="ImageMeta FlexItem FlexWrapper FlexWrapper__column">
        <div className="ImageMeta_tags FlexWrapper FlexWrapper__row">
          {image.tags.split(",").map(tag => (
            <span key={`${image.id}-${tag}`} className="ImageMeta_tags_tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="ImageMeta_stats FlexItem FlexWrapper FlexWrapper__row FlexWrapper__justifyBetween FlexWrapper__alignBottom">
          <div className="ImageMeta_stats_likes">
            <span>{image.likes}</span>
            <LikesIcon className="ImageMeta_stats_icon" />
          </div>
          <div className="ImageMeta_stats_stars">
            <span>{image.favorites}</span>
            <StarsIcon className="ImageMeta_stats_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
