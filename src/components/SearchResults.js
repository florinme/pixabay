import React from "react";
import { ReactComponent as LikesIcon } from "../like.svg";
import { ReactComponent as StarsIcon } from "../star.svg";

export default function SearchResults() {
  return (
    <div className="SearchResults FlexWrapper FlexWrapper__column">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="Card FlexItem FlexWrapper FlexWrapper__row FlexWrapper__gutter">
      <button className="ImageButton FlexItem" type="submit">
        <img
          class="FlexItem"
          src="https://pixabay.com/get/53e3d6424a5aaf14f1dc84609629347f1639dae7524c704c7c2c79dc9144cc5b_640.jpg"
          alt="img-_92ya21jmx"
        />
        <div className={`SaveNotice SaveNotice__pink FlexItem`}>Save</div>
      </button>
      <div className="ImageMeta FlexItem FlexWrapper FlexWrapper__column">
        <div className="ImageMeta_tags FlexWrapper FlexWrapper__row">
          <span className="ImageMeta_tags_tag">squirrell</span>
          <span className="ImageMeta_tags_tag">animal</span>
          <span className="ImageMeta_tags_tag">furry</span>
          <span className="ImageMeta_tags_tag">orange</span>
        </div>
        <div className="ImageMeta_stats FlexItem FlexWrapper FlexWrapper__row FlexWrapper__justifyBetween FlexWrapper__alignBottom">
          <div className="ImageMeta_stats_likes">
            <span>{`${Math.floor(Math.random() * (500 - 4)) + 4} `}</span>
            <LikesIcon className="ImageMeta_stats_icon" />
          </div>
          <div className="ImageMeta_stats_stars">
            <span>{`${Math.floor(Math.random() * (500 - 4)) + 4} `}</span>
            <StarsIcon className="ImageMeta_stats_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
