import React, { useState } from "react";

function Card2() {
  const [icon2, setIcon2] = useState(true);
  return (
    <div>
      <span
        className="slicke"
        onMouseEnter={() => setIcon2(false)}
        onMouseOut={() => setIcon2(true)}
      >
        {icon2 ? <img s alt="" /> : <h1>;</h1>}
      </span>
    </div>
  );
}
export default Card2;
