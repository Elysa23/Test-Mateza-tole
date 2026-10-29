import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Produit from "./produit";
import Footer from "./footer";
import Accueil from "./accueil";
import Actualité from "./actu";
import Contact from "./contact";
import APropos from "./apropos";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/actu" element={<Actualité />} />
          <Route path="/Apropos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
