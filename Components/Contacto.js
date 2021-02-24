import React from "react";
import "../css/Contacto.css";

function Contacto() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="map"
              alt="Map"
              src="https://www.w3schools.com/w3images/map.jpg"
            />
          </div>
          <div class="column">
            <form action="/action_page.php">
              <label for="fname">Nombre</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Tu nombre..."
              />
              <label for="lname">Apellido</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Tu apellido..."
              />
              <label for="subject">Pregunta</label>
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
