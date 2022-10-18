import React from "react";

function Last() {
  return (
    <div className="flexcontainer">
      <div className="upoznavanje">
        <h1>Hajde da se upoznamo...</h1>
      </div>
      <br />
      <div>
        <ul>
          <li>
            <a href="https://gsm-nis.edu.rs/">Gimnazija "Svetozar Markovic"</a>{" "}
          </li>
          <li>
            <a href="http://www.prafak.ni.ac.rs/">Pravni fakultet u Nisu</a>
          </li>
          <li>
            <a href="https://sh.wikipedia.org/wiki/Privredno_pravo">
              Privredno pravo
            </a>
          </li>
          <li>
            <a href="http://www.prafak.ni.ac.rs/studenti/moot-court-takmicenje.html">
              Moot Court Takmicenje
            </a>
          </li>
          <li>
            <a href="https://www.mpravde.gov.rs/sekcija/58/pravosudni-ispit.php">
              Pravosudni ispit
            </a>
          </li>
        </ul>
      </div>
      <div className="bio">
        <img src="../images/IMG_4101-new.png" alt="" />
        <div className="hide">
          01.07.1995. - advokat Andjelina T. Denic Todorovic
        </div>
      </div>
    </div>
  );
}

export default Last;
