import React from "react";
import "../css/Contacto.css";

function Contacto() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="map"
              alt="Map"
              src="https://www.w3schools.com/w3images/map.jpg"
            />
            <a
              href="https://wa.me/14233817689"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
          </div>
          <div className="column">
            <form action="/action_page.php">
              <label htmlFor="fname">Nombre</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Tu nombre..."
              />
              <label htmlFor="lname">Apellido</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Tu apellido..."
              />
              <label htmlFor="subject">Pregunta</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Escribe algo..."
                className="subj"
              ></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
