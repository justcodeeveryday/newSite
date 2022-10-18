import React from "react";
import NaplatnaKartica from "./NaplatnaKartica";

function Naplata() {
  return (
    <div className="naplata">
      <div className="naplataUvod">
        <h2>Najbrži način do</h2>
        <h1>Maksimalne naplate štete</h1>
      </div>
      <div className="items">
        <div className="Kartice">
          <NaplatnaKartica
            number="1"
            title="Stručna procena štete"
            par="- Štetu na vozilu procenjuje veštak mašinske struke.
            -Štetu nastalu usled povreda veštak medicinske struke.
            -Umanjenu zaradu veštak ekonomske struke itd.
            Tim saradnika advokatske kancelarije obezbeđuje da šteta bude stručno i adekvatno procenjena."
          />
        </div>
        <div className="Kartice">
          <NaplatnaKartica
            number="2"
            title="Uspesno resavanje slucajeva"
            par="Naplata štete vrši se od osiguranja sa kojim licem koje je odgovorno za saobraćajni dogovor ima zaključen ugovor o osiguranju tj. polisu.

            Oštećeni imaju pravo da naplati štetu i u slučaju da drugo vozilo učesnik u
            udesu nije registrovano, kao i u slučaju da se radi o vozilima stranih
            registarskih oznaka ili u slučaju oštećenja vozila na parkingu."
          />
        </div>
        <div className="Kartice">
          <NaplatnaKartica
            number="3"
            title="Fer naplata"
            par="Angažovanjem advokata obezbeđujete sebi maksimalnu naplatu svih vidova štete bez vašeg ličnog angažovanja, uz punu sigurnost da ćete vaša prava i interese u potpunosti biti zadovoljni.

          Naše usluge naplaćujemo procentualnim iznosom od ukupno plaćene odštete."
          />
        </div>
      </div>
    </div>
  );
}
export default Naplata;
