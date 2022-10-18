import React, { useState } from "react";

function Card(props) {
  const [icon, setIcon] = useState(true);

  return (
    <div>
      <span
        onMouseEnter={() => setIcon(false)}
        onMouseOut={() => setIcon(true)}
      >
        {icon ? (
          <img src={props.src} alt="" />
        ) : (
          <div>
            <h1 className="tekst">{props.title}</h1>
            <br />
            <p className="par">{props.content}</p>
          </div>
        )}
      </span>
    </div>
  );
}

export default Card;
