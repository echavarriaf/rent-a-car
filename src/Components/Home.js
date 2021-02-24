import React from "react";
import "../css/Home.css";
import lexus from "../img/lexus.jpg";
import prado from "../img/prado.jpg";
import mercedes from "../img/mercedes benz.jpg";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const cars = [{ lexus }, { prado }, { mercedes }];
const delay = 2500;

function Home() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <h1>Bienvenido a Noemy Rent Car</h1>
          <h3>Servicio de alta calidad, al alcance de todos.</h3>
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
      <br />

      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div className="slide" key={index} style={{ backgroundColor }}>
              <img src={cars[index].lexus ? lexus : cars[index].prado? prado : mercedes} />
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
