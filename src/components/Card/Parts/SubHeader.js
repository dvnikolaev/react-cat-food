import React from "react";

const SubHeader = ({className}) => {
  return (
    <>
      <p className="card__subheader text-color--secondary">
        Сказочное заморское яство
      </p>
      <p className={`card__subheader ${className()}`}>
        Котэ не одобряет?
      </p>
    </>
  );
};

export default SubHeader;