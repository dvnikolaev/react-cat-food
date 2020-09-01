import React from "react";

import SubHeader from "./Parts/SubHeader";
import Gift from "./Parts/Gift";
import IsHappy from "./Parts/IsHappy";
import Weight from "./Parts/Weight";
import SubText from "./Parts/SubText";

const TheCard = ({
  taste,
  weight,
  count,
  giftCount,
  description,
  isHappy,
  id,
  setSelectedId,
  selectedId,
  isDisable,
}) => {
  
  const classSelect = () => {
    return selectedId.includes(id) ? "active" : "";
  };

  const classDisable = () => {
    return isDisable ? "disable" : "";
  };

  const selectId = (e) => {
    if (isDisable) {
      return null;
    }
    let localArray = [];
    e.target.classList.remove('show');

    if (selectedId.includes(id)) {
      localArray = selectedId.filter(item => item !== id);  
    } else {
      localArray = selectedId.concat([id]);
    }
    setSelectedId(localArray);
  };

  const mouseLeave = (e) =>{
    if (selectedId.includes(id) && e.target.classList.contains('card-wrapper')){
      e.target.classList.add('show');
    } 
  }

  return (
    <li className="card-item">
      <button
        className={`card-wrapper 
                    ${classSelect()} 
                    ${classDisable()}`
        }
        onClick={selectId}
        onMouseLeave={mouseLeave}
      >
        <div className="card">
          <SubHeader className={classSelect} />
          <h3 className="card__header">Нямушка</h3>
          <p className="card__taste">c {taste}</p>
          <p className="card__count text--secondary">{count} порций</p>
          <Gift giftCount={giftCount} />
          <IsHappy isHappy={isHappy} />
          <Weight classSelect={classSelect} weight={weight} />
        </div>
      </button>
      <SubText
        isDisable={isDisable}
        description={description}
        taste={taste}
        selectedId={selectedId}
        id={id}
        classDisable={classDisable}
        classSelec={classSelect}
        selectId={selectId}
      />
    </li>
  );
};

export default TheCard;
