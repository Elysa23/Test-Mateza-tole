function Footer() {
  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div>
          <img src="../src/assets/Logo-Mateza.ico" alt="Logo" />
          <h2>MATEZA TOLE</h2>
          <p>
            Votre partenaire de confiance pour tous vos besoins en tôles et
            matériaux de construction. Qualité, durabilité et sur mesure
            garantis.
          </p>
          <div>
            <a
              href="https://www.facebook.com/matezatole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../src/assets/facebook-icon.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/matezatole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../src/assets/instagram-icon.png" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/matezatole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../src/assets/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#produits">Produits</a>
            </li>
            <li>
              <a href="#apropos">A Propos</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Nos produits</h3>
          <ul>
            <li>Tôles Ondulées</li>
            <li>Tôles Bac Acier</li>
            <li>Accessoires</li>
            <li>Sur Mesure</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <img src="" alt="" />
              <span>+ 261 34 06 690 33</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>+ 261 33 48 248 48</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>contact@matezatole.com</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>LOT BA 307 AMPITATAFIKA PK8</span>
            </li>
          </ul>
        </div>

        <div className="container mx-auto px-4 py-8">
          <p>&copy; 2023 Mon Application. Tous droits réservés.</p>
          <ul>
            <li>
              <a href="/politique-confidentialite">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="/mentions-legales">Conditions d'utilisation</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
