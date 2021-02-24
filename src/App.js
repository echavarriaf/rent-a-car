import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Mision from "./Components/Mision";
import Catalogo from "./Components/Catalogo";
import Contacto from "./Components/Contacto";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/mision">
            <Mision />
          </Route>
          <Route path="/catalogo">
            <Catalogo />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
