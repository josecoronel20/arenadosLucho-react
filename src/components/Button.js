import React from "react";

const Button = ({ children }) => {
  return <div className="bg-secondaryDark py-2 px-10 rounded-full cursor-pointer text-primary font-semibold hover:scale-105 transform transition-all duration-500 ease-in-out hover:bg-secondaryLight
  ">{children}</div>;
};

export default Button;
