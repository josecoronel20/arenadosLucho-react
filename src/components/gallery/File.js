import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Loading from "../Loading";

const File = ({ children }) => {
  const files = children;
  const firstFile = files[0];
  const [isClicked, setIsClicked] = useState(false);
  const [fileIndex, setFileIndex] = useState(0);
  const close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 15 15"
    >
      <path
        fill="#fee6d8"
        d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
      />
    </svg>
  );
  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fee6d8"
        d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886M17 19.091L6.757 12L17 4.909z"
      />
    </svg>
  );
  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fee6d8"
        d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886M7 4.909L17.243 12L7 19.091z"
      />
    </svg>
  );

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
    setFileIndex(0);
  };

  const filesLenght = files.length;

  const handleArrowLeft = () => {
    if (fileIndex === 0) {
      setFileIndex(filesLenght - 1);
    } else {
      setFileIndex(fileIndex - 1);
    }
  };

  const handleArrowRight = () => {
    if (fileIndex === filesLenght - 1) {
      setFileIndex(0);
    } else {
      setFileIndex(fileIndex + 1);
    }
  };

  return (
    <div className="w-36 sm:w-52 md:w-full md:max-w-xs ">
      {files.length > 0 ? (
        isClicked === false ? (
          <img
            className="rounded-md overflow-hidden cursor-pointer"
            onClick={handleIsClicked}
            src={firstFile.props.src}
            alt={firstFile.key}
            key={firstFile.key}
          />
        ) : (
          <div className=" bg-bgOpacidad fixed z-30 top-0 left-0 h-screen w-full p-5 flex justify-center items-center">
            <div
              onClick={handleIsClicked}
              className="absolute top-10 right-10 z-40 cursor-pointer "
            >
              {close}
            </div>
            <div className=" flex gap-5  justify-center items-center">
              <div className="cursor-pointer" onClick={handleArrowLeft}>
                {arrowLeft}
              </div>
              <img
                className="rounded-md overflow-hidden cursor-pointer h-full w-full object-cover"
                src={files[fileIndex].props.src}
                alt={files[fileIndex].key}
                key={files[fileIndex].key}
              />
              <div className="cursor-pointer" onClick={handleArrowRight}>
                {arrowRight}
              </div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
};

export default File;
