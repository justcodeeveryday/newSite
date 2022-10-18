import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer
        style={{
          height: "300px",
          backgroundImage:
            "url('https://media.istockphoto.com/photos/judge-gavel-and-scale-in-court-legal-concept-picture-id1090431444?k=20&m=1090431444&s=612x612&w=0&h=by_YZG3Mc-wnqx9bSpsKYMKOJkzRDW-WPDfGq8M_Y-o=')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%"
        }}
      >
        <div id="footer">
          <p>
            <ul>
              <li className="liste">Broj Telefona: 0669010394</li>
              <li className="liste">E-mail: tuffnicka@gmail.com</li>
              <li className="liste">Adresa: Jovana Ristica 16A/4,Nis 18000</li>
            </ul>
          </p>
          <div className="inputs">
            <input
              style={{ width: "200%", marginTop: "10px", height: "18px" }}
              type="text"
              placeholder="Ime"
            />
            <br />
            <input
              style={{ width: "200%", marginTop: "10px", height: "18px" }}
              type="text"
              placeholder="E-mail"
            />
            <br />
            <textarea
              style={{ width: "200%", marginTop: "10px" }}
              placeholder="Pitanje"
              rows={6}
            />
            <a href="sdt" class="myButton2">
              Posalji
            </a>
          </div>
        </div>

        <div className="copyright">
          <h3> © Copyright {year} - advokat Andjelina T. Denic Todorovic</h3>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
