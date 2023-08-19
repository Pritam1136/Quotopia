/* eslint-disable no-unused-vars */
import React from "react";

function Foot() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="mb-2 mt-8 flex justify-center font-serif">
      Created ❤️ by PritamRoy © {year}
    </div>
  );
}

export default Foot;
