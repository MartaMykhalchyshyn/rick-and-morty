import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./CharacterDetails.scss";

const CharacterDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, gender, status, species, origin, type } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  let navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <div className="character-details__holder">
      <button className="button__go-back" onClick={goBackHandler}>
        GO BACK
      </button>
      <img className="character-details__image" src={image} alt="" />
      <h1 className="character-details__name">{name}</h1>
      <h4 className="character-details__info-header">Informations</h4>
      <div className="character-details__holder info">
        <div className="character-details__detail-holder">
          <p className="character-details__subtitle">Gender</p>
          <p className="character-details__data">{gender}</p>
        </div>
        <div className="character-details__detail-holder">
          <p className="character-details__subtitle">Status</p>
          <p className="character-details__data">{status}</p>
        </div>
        <div className="character-details__detail-holder">
          <p className="character-details__subtitle">Specie</p>
          <p className="character-details__data">{species}</p>
        </div>
        <div className="character-details__detail-holder">
          <p className="character-details__subtitle">Origin</p>
          <p className="character-details__data">{origin?.name}</p>
        </div>
        <div className="character-details__detail-holder">
          <p className="character-details__subtitle">Type</p>
          <p className="character-details__data">
            {type === "" ? "Unknown" : type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
