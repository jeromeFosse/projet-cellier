import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Footer from "./composants/Pied/Pied";
import Entete from "./composants/Entete/Entete";
import Usager from './vues/Usager/Usager';
import NonTrouve from "./vues/NonTrouve/NonTrouve";
import Accueil from "./vues/Accueil/Accueil";
import ListeCellier from "./ListeCellier/ListeCellier";
import Cellier from "./vues/Cellier/Cellier";



const AppRouter = () => {
  return (
    <Router>
      <Entete />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/usager" element={<Usager />} />
        <Route path="/listeCellier" element={<ListeCellier />} />
        <Route path="/celliers" element={<Cellier />} />
        <Route path="*" element={<NonTrouve />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
