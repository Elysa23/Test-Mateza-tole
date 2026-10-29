import Filtre from "./filtre";

const produits = [
  {
    id: 1,
    nom: "Produit 1",
    prix: 10000,
    categorie: "Catégorie 1",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nom: "Produit 2",
    prix: 20000,
    categorie: "Catégorie 2",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nom: "Produit 3",
    prix: 30000,
    categorie: "Catégorie 1",
    photo: "https://via.placeholder.com/150",
  },
];

function Produit() {
  return (
    <>
      <section className="filtres-container">
        <Filtre></Filtre>
      </section>
      <section
        className="produits-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {produits.map((produit) => (
          <div
            key={produit.id}
            className="produit"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              backGroundImage: "url({produit.photo})",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: "200px",
              height: "200px",
            }}
          >
            <h3>{produit.nom}</h3>
            <p>Prix: {produit.prix} Ar</p>
            <p>Catégorie: {produit.categorie}</p>
            <button>Ajouter au panier</button>
          </div>
        ))}
      </section>

      <section className="actualites-container">
        <h2>BESOIN D'UN PRODUIT SUR MESURE ?</h2>
        <p>
          Nous fabriquons des toles aux dimensions exactes de votre projet.
          Contactez-nous pour un devis personnalisé.
        </p>
        <button>Demander un devis</button>
      </section>
    </>
  );
}

export default Produit;
