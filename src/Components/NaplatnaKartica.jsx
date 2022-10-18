import React from "react";

function NaplatnaKartica(props) {
  return (
    <div className="naplatnaKartica">
      <div className="number">{props.number}</div>
      <div>
        <h2 style={{ fontSize: "40px" }}>{props.title}</h2>
        <p style={{ fontSize: "22px" }}>{props.par}</p>
      </div>
    </div>
  );
}

export default NaplatnaKartica;
