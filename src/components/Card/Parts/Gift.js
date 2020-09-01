import React from "react";

const Gift = ({ giftCount }) => {
  const getTextGift = () => {
    if (giftCount === 1) {
      return "мышь в подарок";
    }
    if (giftCount < 5) {
      return `${giftCount} мыши в подарок`;
    }
    return `${giftCount} мышей в подарок`;
  };

  return <p className="card__gift text--secondary">{getTextGift()}</p>;
};

export default Gift;
