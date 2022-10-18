import React from "react";

function BlogCards(props) {
  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>{props.title}</h1>
      <br />
      <p style={{ fontSize: "22px" }}>{props.content}</p>

      <div style={{ position: "absolute", bottom: "5px" }}>
        <h2 className="saznajte">Saznajte više ⟶</h2>
      </div>
    </div>
  );
}
export default BlogCards;
