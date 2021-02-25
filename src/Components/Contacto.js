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
            <div className="contact_information">
              <p>
                <strong>Dirección:</strong>
              </p>
              <p>Calle Dr. Tejada Florentino con Calle Regino Camilo</p>
              <p>Tenares, Hermanas Mirabal, Dominican Republic</p>
            </div>

            <a
              href="https://www.google.com/maps/place/Noemy+Rent+Car/@19.375092,-70.3511705,19.5z/data=!4m5!3m4!1s0x8eae29ce77c950ed:0xda0d394ab87ee4f0!8m2!3d19.3752355!4d-70.3510294"
              target="_blank"
            >
              {" "}
              Ver en Mapa
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
