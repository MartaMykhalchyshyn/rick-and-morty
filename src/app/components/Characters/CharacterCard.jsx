import React from "react";
import { Link } from "react-router-dom";

import "./CharacterCard.scss";

const CharacterCard = ({ page, results }) => {
  let display;
  if (results) {
    display = results
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((result) => {
        let { id, image, name, species } = result;
        const truncatedName = name.length > 20 ? name.slice(0, 17) + "..." : name
        
        return (
          <Link style={{ textDecoration: "none" }} to={`${page}${id}`} key={id}>
            <div key={id} className="character-card__container" >
              <img className="character-card__image" src={image} alt="" />
              <div className="character-card__description">
                <p className="character-card__name">{truncatedName}</p>
                <p className="character-card__species">{species}</p>
              </div>
            </div>
          </Link>
        );
      });
  } else {
    display = "No Characters Found";
  }

  return <div className="character-cards">{display}</div>;
};

export default CharacterCard;
