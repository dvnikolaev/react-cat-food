import React from "react";

const SubText = ({
  isDisable,
  description,
  taste,
  selectedId,
  id,
  classDisable,
  classSelect,
  selectId
}) => {

  const select = () => {
    selectId();
  }

  if (isDisable) {
    return (
      <p className={`card__subtext ${classDisable}`}>
        Печалька, с {taste} закончился
      </p>
    );
  }
  if (selectedId === id) {
    return <p className={`card__subtext ${classSelect}`}>{description}</p>;
  }
  return (
    <p className="card__subtext">
      Чего сидишь? Порадуй котэ,
      <button className="card__subtext-button">
        <span className="card__subtext-button-text" onClick={select}>купи</span>.
      </button>
    </p>
  );
};

export default SubText;