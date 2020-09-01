import React, { useState } from "react";

import TheCard from "./TheCard";

import "../../assets/stylesheets/TheCard.css";

const Cards = () => {
  const products = [
    {
      id: 1,
      taste: "фуа-гра",
      weight: 0.5,
      count: 10,
      giftCount: 1,
      description: 'Печень утки разварная с артишоками.',
      isHappy: false,
      isDisable: false
    },
    {
      id: 2,
      taste: "рыбой",
      weight: 2,
      count: 40,
      giftCount: 2,
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      isHappy: false,
      isDisable: false
    },
    {
      id: 3,
      taste: "курой",
      weight: 5,
      count: 100,
      giftCount: 5,
      description: 'Филе из цыплят с трюфелями в бульоне.',
      isHappy: true,
      isDisable: true
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const renderCardList = products.map((product) => {
    return (
      <TheCard
        key={product.id}
        id={product.id}
        selectedId={selectedId}
        taste={product.taste}
        weight={product.weight}
        count={product.count}
        giftCount={product.giftCount}
        description={product.description}
        isHappy={product.isHappy}
        isDisable={product.isDisable}
        setSelectedId={setSelectedId}
      />
    );
  });
  return <ul className="cardsList">{renderCardList}</ul>;
};

export default Cards;
