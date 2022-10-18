import React, { useState } from "react";
import Card from "./Card";

function NextMiddle() {
  return (
    <div id="nextmiddle">
      <div className="naslov">
        <h1>Oblasti prava:</h1>
      </div>
      <div className="nextmiddle">
        <div className="cards card1">
          <Card
            src="https://cdn-icons-png.flaticon.com/512/3122/3122321.png"
            title="Krivično pravo"
            content="Krivično (materijalno) pravo predstavlja skup pravnih normi čiji je zadatak da zaštiti i čuva najznačajnije vrednosti u društvu. Krivično materijalno pravo, sa jedne strane, reguliše pitanja koja se odnose na samo krivično delo, dok se krivično procesno pravo bave pitanjima koja se odnose na postupak u kojem se utvrđuje krivična odgovornost. Iz uobičajenog prava se najviše razvilo materijalno krivično pravo, koje je kasnije pretrpelo mere kodifikacije saveznim i državnim statutima."
          />
        </div>
        <div className="cards">
          <Card
            src="https://cdn-icons-png.flaticon.com/512/1208/1208147.png"
            title="Građansko pravo"
            content="Građansko pravo je porodica pravnih grana koje regulišu imovinske i neimovinske odnose povodom stvari, činidbi, ljudskih radnji i tvorevina uma na osnovu načela autonomije volje, prenosivosti prava i obaveza, pravne jednakosti, zaštite na privatni zahtjev i imovinske sankcije. Sveukupno, razlikuju se: Uvod u Građansko Pravo, Opšti Deo Građanskog Prava i Posebni Delovi (obligaciono, stvarno, porodično, nasljedno, intelektualno, radno, lično, trgovinsko)."
          />
        </div>
        <div className="cards">
          <Card
            src="https://cdn-icons-png.flaticon.com/512/2361/2361616.png"
            title="Privredno pravo"
            content="U ranijim razdobljima razvitka pravne nauke u sastavu
        građanskog prava bilo je i trgovačko pravo, koje se nekad naziva i
        privredno pravo. Usled dinamičnog razvoja, ono se iz njega
        izdvojilo i sada predstavlja veoma perspektivno, samostalnu pravnu
        granu. Robonovčani tokovi čine ga i dalje veoma dinamičnim pravom,
        podložnim promjenama i usavršavanjima."
          />
        </div>
      </div>
    </div>
  );
}

export default NextMiddle;
