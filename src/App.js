import Cyberia from "core/cyberia";

import "./index.scss";
import notfound from "./notfound";
import navbar from "./navbar";
import header from "./header"; 
import hero from "./hero";
import content from "./content";
import services from "./services";
import footer from "./footer";
import pricing from "./pricing";


const Routes = Cyberia.Routes;

const routes = {
  "/": hero,
  "/about": services,
  "/pricing": pricing,
  "/contact": content,
  "/notfound": notfound,
};

var App = [
    navbar,
    header,
    Routes(routes),
    footer
]

Cyberia.Render( App , document.getElementById("app") );