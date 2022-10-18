import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import MovingComponent from "react-moving-text";

function Header() {
  return (
    <header>
      <div className="navy" style={{}}>
        <h1 className="gold">
          <div id="pocetna">
            {" "}
            <ScrollIntoView selector=".navy">
              <h4>Pocetna</h4>
            </ScrollIntoView>
            <ScrollIntoView selector=".konsultacije">
              <h4>Konsultacije</h4>
            </ScrollIntoView>
            <ScrollIntoView selector="#nextmiddle">
              <h4>Oblasti prava</h4>
            </ScrollIntoView>
            <ScrollIntoView selector=".flexcontainer">
              <h4>O meni</h4>
            </ScrollIntoView>
            <ScrollIntoView selector="#footer">
              <h4>Kontakt</h4>
            </ScrollIntoView>
          </div>
        </h1>
        <MovingComponent
          type="shakeHorizontal"
          duration="8000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="0"
          fillMode="none"
        >
          <h2 className="advokat">Advokat Andjelina T. Denic Todorovic</h2>
        </MovingComponent>

        <div id="insider">
          <h3>"Preporuka za dobrog advokata dolazi od zadovoljnog klijenta"</h3>
          <ScrollIntoView selector="#footer">
            <button
              style={{ marginLeft: "40%", marginTop: "45%" }}
              className="myButton"
            >
              Kontakt
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </header>
  );
}

export default Header;
