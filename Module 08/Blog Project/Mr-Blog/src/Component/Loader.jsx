import React from "react";

const Loader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
