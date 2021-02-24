import React from "react";
import "../css/Header.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* <Link to="/">
        <img
          alt="Noemy Rent a Car"
          src="//isteam.wsimg.com/ip/3204dcc1-f59b-4dd8-a16f-c6d4d4e991d4/CB050DC2-8117-4B6E-9E3E-82F6F58552D9_1_105_c.jpeg/:/rs=h:400/qt=q:95"
          className="logo"
        />
      </Link> */}
      {/* <div className="navbar2">
        <a href="/" className="active">
          Home
        </a>
        <a href="/catalogo">Catálogo</a>
        <a href="/mision">Misión</a>
        <a href="/contacto">Contacto</a>
        <a href="#" className="right"></a>
          </div> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            alt="Noemy Rent a Car"
            src="//isteam.wsimg.com/ip/3204dcc1-f59b-4dd8-a16f-c6d4d4e991d4/CB050DC2-8117-4B6E-9E3E-82F6F58552D9_1_105_c.jpeg/:/rs=h:400/qt=q:95"
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">
              Home
            </a>
            <a className="nav-item nav-link" href="/mision">
              Misión
            </a>
            <a className="nav-item nav-link" href="/catalogo">
              Catálogo
            </a>
            <a className="nav-item nav-link" href="/contacto">
              Contacto
            </a>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
}

export default Header;
