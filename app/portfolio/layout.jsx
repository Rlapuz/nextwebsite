import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-slarge font-bold bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text-6xl bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text">
        Our Works
      </h1>
      {children}
    </div>
  );
};

export default layout;
