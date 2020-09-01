import React from "react";

const TheCard = ({ taste, weight, count, giftCount, isHappy, id, setSelectedId, selectedId }) => {
  const renderGift = () => {
    if (giftCount === 1) {
      return <p className="card__gift text--secondary">мышь в подарок</p>;
    }
    if (giftCount < 5) {
      return (
        <p className="card__gift text--secondary">{giftCount} мыши в подарок</p>
      );
    }
    return (
      <p className="card__gift text--secondary">{giftCount} мышей в подарок</p>
    );
  };

  const renderIsHappy = () => {
    if (!isHappy) {
      return null;
    }
    return (
      <span className="card__isHappy text--secondary">Заказчик доволен</span>
    );
  };

  const renderWeight = () => {
    return (
      <div className={`card__weight ${classSelect()}`}>
        <span className="card__weight-number">{weight}</span>
        кг
      </div>
    );
  };

  const classSelect = () => {
    return selectedId === id ? 'active' : '';
  }

  const selectId = () => {
    setSelectedId(id);
  } 

  return (
    <li className="card-item">
      <button className={`card-wrapper ${classSelect()}`} onClick={selectId}>
        <div className="card">
          <p className="card__subheader text-color--secondary">
            Сказочное заморское яство
          </p>
          <h3 className="card__header">Нямушка</h3>
          <p className="card__taste">c {taste}</p>
          <p className="card__count text--secondary">{count} порций</p>
          {renderGift()}
          {renderIsHappy()}
          {renderWeight()}
        </div>
      </button>
    </li>
  );
};

export default TheCard;
