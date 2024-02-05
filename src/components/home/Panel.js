import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Panel = ({ title, img, children, reverse }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

const rowReverseClass = reverse ? `bg-primary flex flex-col md:flex-row-reverse p-7 items-center justify-center gap-5
` : `bg-primary flex flex-col md:flex-row p-7 items-center justify-center gap-5
`;

  return (
    <>
      <div onClick={handleIsOpen} className={`flex justify-between items-center transform ease-in-out duration-500 cursor-pointer px-3
      ${isOpen ? "bg-secondaryLight" : "bg-primary"}`}>
        <h2 className={`${isOpen ? "text-primary" : "text-secondaryDark hover:text-secondaryLight ease-in duration-200`"}`}>{title}</h2>
        {isOpen === false ? (
          <Icon icon="mingcute:down-line" color="#2d77a9" width="35" />
        ) : (
          <Icon
            icon="mingcute:down-line"
            color="#fee6d8"
            width="35"
            rotate={2}
          />
        )}
      </div>
      {isOpen === true ? (
        <div className={rowReverseClass}>
          <img className="sm:w-sm
          " src={img} alt={title} />
          <p className="text-secondaryDark max-w-md">{children}</p>
        </div>
      ) : null}
    </>
  );
};

export default Panel;
