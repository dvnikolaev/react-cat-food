import React from "react";

const isHappy = ({ isHappy }) => {
  if (!isHappy) {
    return null;
  }
  return (
    <span className="card__isHappy text--secondary">Заказчик доволен</span>
  );
};

export default isHappy;
