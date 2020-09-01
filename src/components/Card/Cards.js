import React from 'react';

import TheCard from './TheCard';

import "../../assets/stylesheets/TheCard.css";

const Cards = () => {
  return (
    <div className="cards">
        <TheCard />
        <TheCard />
        <TheCard />
      </div>
  )
}

export default Cards;