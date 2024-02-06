import React from "react";

const MaxWidthWrapper = ({children, className}) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-2xl px-3 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
