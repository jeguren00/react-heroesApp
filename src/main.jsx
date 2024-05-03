import ReactDOM from "react-dom/client";
//import './styles.css'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { HeroesApp } from "./HeroesApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>
);
