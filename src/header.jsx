import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div className="flex items-center  gap-5 p-4 bg-gray-100">
          <img
            src="../src/assets/Logo-Mateza.ico"
            alt="Logo"
            className="w-12 h-auto"
          />
          <h1 className="text-2xl font-semibold">
            <span className="text-white">MATEZA</span>{" "}
            <span className="text-red-700">TOLE</span>
          </h1>
        </div>
        <nav className="flex gap-4">
          <Link to="/accueil">Accueil</Link>
          <Link to="/produit">Produits</Link>
          <Link to="/actu">Actualité</Link>
          <Link to="/Apropos">A Propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex gap-4">
          <button className="border rounded-lg bg-red-700 p-2 px-3 text-amber-50 text-bold">
            Demander un devis
          </button>
          <button className="border rounded-lg bg-blue-900 p-2 px-3 text-white text-bold">
            Se connecter
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
