import React from "react";

const Gift = ({ giftCount }) => {
  if (giftCount === 1) {
    return <p className="card__gift text--secondary">мышь в подарок</p>;
  }
  if (giftCount < 5) {
    return (
      <p className="card__gift text--secondary">
        <span className="text--bold">{giftCount}</span> мыши в подарок
      </p>
    );
  }
  return (
    <p className="card__gift text--secondary">
      <span className="text--bold">{giftCount}</span> мышей в подарок
    </p>
  );
};

export default Gift;
