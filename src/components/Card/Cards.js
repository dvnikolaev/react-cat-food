import React from "react";

import TheCard from "./TheCard";

import "../../assets/stylesheets/TheCard.css";

const Cards = () => {
  const products = [
    {
      taste: "фуа-гра",
      weight: 0.5,
      count: 10,
      giftCount: 1,
      isHappy: false,
    },
    {
      taste: "рыбой",
      weight: 2,
      count: 40,
      giftCount: 2,
      isHappy: false,
    },
    {
      taste: "курой",
      weight: 5,
      count: 100,
      giftCount: 5,
      isHappy: true,
    },
  ];

  const renderCardList = products.map((product) => {
    return (
      <TheCard
        key={product.taste}
        taste={product.taste}
        weight={product.weight}
        count={product.count}
        giftCount={product.giftCount}
        isHappy={product.isHappy}
      />
    );
  });
  return <ul className="cardsList">{renderCardList}</ul>;
};

export default Cards;
