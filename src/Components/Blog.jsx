import React from "react";
import BlogCards from "./BlogCards";

function Blog() {
  return (
    <div className="Blog">
      <div className="Blognaslov">
        <h3>OSTVARITE</h3>
        <h1>PRAVO NA MAKSIMALNU NAKNADU ŠTETE</h1>
        <h3>Kratke okvirne konsultacije se ne naplacuju!</h3>
      </div>
      <div className="Blogkartice">
        <div className="karticeZaBlog">
          <BlogCards
            title="Naplata štete u saobraćaju"
            content="U slučaju da ste bili učesnik u saobraćajnoj nesreći, angažovanjem advokata, u što kraćem roku, obezbeđujte sebi punu sigurnost da će vaša prava i interesi u potpunosti biti zadovoljni."
          />
        </div>
        <div className="karticeZaBlog">
          <BlogCards
            title="Naplata štete za povrede na radu"
            content="Ako se desi povreda na radu, zaposleni imaju pravo na nadoknadu nastale štete od poslanika. Angažovanjem advokata, u što kraćem roku, obezbeđujete sebi punu sigurnost da će vaša prava i interesi u potpunosti biti zadovoljni."
          />
        </div>
        <div className="karticeZaBlog">
          <BlogCards
            title="Naplata štete na javnom mestu"
            content="Ukoliko doživite povredu na javnom mestu (na ulici, tržnom centru, dvorištu zgrade i sl.) imate pravo na odštetu.

Angažovanjem advokata u tom slučaju, obezbeđujete sebi punu sigurnost da će vaša prava i interesi u potpunosti biti zadovoljni."
          />
        </div>
      </div>
      <div className="BlogKartice2red">
        <div className="karticeZaBlog">
          <BlogCards
            title="Naplata štete od ujeda pasa"
            content="Ukoliko se desi da vas ujede pas lutalica, imate pravo na odštetu od grada ili opštine u kojoj se desio.

          Angažovanjem advokata obezbeđujete sebi punu sigurnost da će vaša prava i interesi u potpunosti biti zadovoljni."
          />
        </div>
        <div className="karticeZaBlog">
          <BlogCards
            title="Naplata štete za fizički i duševni bol"
            content="Pravo na odštetu za nematerijalnu štetu donosi se u novčanom i nenovčanom obliku.

          Angažovanjem advokata obezbeđujete sebi punu sigurnost da će vaša prava biti zadovoljna."
          />
        </div>
        <div className="karticeZaBlog">
          <BlogCards
            title="Naplata štete od elementarnih nepogoda"
            content="U slučaju štete od posledica elementarnih nepogoda (poplave, zemljotresi, požari...) koji su utvrđeni i od strane vlade, imate pravo na nadu štete od države.

        Angažovanjem advokata obezbeđujete sebi punu sigurnost da će vaša prava i interesi u potpunosti biti zadovoljni."
          />
        </div>
      </div>
    </div>
  );
}
export default Blog;
