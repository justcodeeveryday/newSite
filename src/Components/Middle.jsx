import React, { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import MovingComponent from "react-moving-text";

function Middle() {
  const [buttonAnimation, setButtonAnimation] = useState(true);

  return (
    <div className="konsultacije">
      <h1>Pozovite za savet ili zastupanje.</h1>

      <br />
      <h2>Kratke okvirne konsultacije se ne naplacuju!</h2>
      <br />
      <div
        className="button2"
        onMouseEnter={() => setButtonAnimation(false)}
        onMouseLeave={() => setButtonAnimation(true)}
      >
        {buttonAnimation ? (
          <ScrollIntoView selector="#footer">
            <MovingComponent
              type="flip"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="0"
              fillMode="none"
            >
              <button className="myButton">Kontakt</button>
            </MovingComponent>
          </ScrollIntoView>
        ) : (
          <ScrollIntoView selector="#footer">
            <button className="myButton">Kontakt</button>
          </ScrollIntoView>
        )}
      </div>
    </div>
  );
}

export default Middle;
