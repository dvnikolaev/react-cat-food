import React, { useState } from "react";

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

  const [isShow,setIsShow] = useState(false);

  const isSelectedId = () => {
    return selectedId.includes(id);
  }
  
  const classSelect = () => {
    return isSelectedId() ? "active" : "";
  };

  const classIsShow = () => {
    return isShow ? "show" : "";
  }

  const classDisable = () => {
    return isDisable ? "disable" : "";
  };

  const selectId = (e) => {
    if (isDisable) {
      return null;
    }

    let localArray = [];

    if (isSelectedId()) {
      localArray = selectedId.filter(item => item !== id); 
      setIsShow(false); 
    } else {
      localArray = selectedId.concat([id]);
    }
    setSelectedId(localArray);
  };
  
  const setShowClass = () => {
    return isSelectedId() ? setIsShow(true) : '';
  }

  return (
    <li className="card-item">
      <button
        className={`card-wrapper 
                    ${classSelect()} 
                    ${classDisable()}
                    ${classIsShow()}`
        }
        onClick={selectId}
        onMouseLeave={setShowClass}
      >
        <div className="card">
          <SubHeader className={classSelect} />
          <h3 className="card__header">Нямушка</h3>
          <p className="card__taste">c {taste}</p>
          <p className="card__count text--secondary"><span className="text--bold">{count}</span> порций</p>
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
        setIsShow={setIsShow}
      />
    </li>
  );
};

export default TheCard;
