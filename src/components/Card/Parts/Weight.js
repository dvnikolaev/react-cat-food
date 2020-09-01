import React from "react";

const Weight = ({classSelect, weight}) => {
  return (
    <div className={`card__weight ${classSelect()}`}>
      <span className="card__weight-number">{weight}</span>
      кг
    </div>
  );
};

export default Weight;
