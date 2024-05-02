import ReactDOM from "react-dom/client";
//import './styles.css'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
