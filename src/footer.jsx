import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogo } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-between mx-auto bg-primary text-primary-foreground bg-blue-950  w-screen px-32 py-22">
        <div className="flex flex-row justify-between gap-4 mb-4 font-semibold">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-5 max-w-full">
              <img
                src="../src/assets/Logo-Mateza-Footer.png"
                alt="Logo"
                className="w-12 h-auto"
              />
              <h2>
                <span className="text-white">MATEZA</span>{" "}
                <span className="text-red-700">TOLE</span>
              </h2>
            </div>
            <div className="py-4  max-w-full ">
              <p className="max-w-xs text-left">
                Votre partenaire de confiance pour tous vos besoins en tôles et
                matériaux de construction. Qualité, durabilité et sur mesure
                garantis.
              </p>
            </div>

            <div className="flex gap-4 py-4">
              <a
                href="https://www.facebook.com/matezatole"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-red-700/30"
              >
                <FiFacebook className="size-6" />
              </a>

              <a
                href="https://www.instagram.com/matezatole"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-red-700/20"
              >
                <PiInstagramLogo className="size-6" />
              </a>

              <a
                href="https://www.linkedin.com/company/matezatole"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-red-700/20"
              >
                <FiLinkedin className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 text-left">
            <h3 className="text-lg font-semibold text-red-700">Navigation</h3>
            <ul className="flex flex-col gap-2 list-disc marker:text-red-700 pl-5">
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
          <div className="flex flex-col gap-4 p-4 text-left">
            <h3 className="text-lg font-semibold text-red-700">Nos produits</h3>
            <ul className="flex flex-col gap-2 list-disc marker:text-red-700 pl-5">
              <li>Tôles Ondulées</li>
              <li>Tôles Bac Acier</li>
              <li>Accessoires</li>
              <li>Sur Mesure</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-4 text-left">
            <h3 className="text-lg font-semibold text-red-700">Contact</h3>
            <ul className="flex flex-col gap-2 list-disc marker:text-red-700 pl-5">
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
        </div>
        <div className="flex flex-row justify-between gap-12 border-t border-white/30 pt-6">
          <div>
            <p>&copy; 2023 Mateza Tôle. Tous droits réservés.</p>
          </div>
          <div>
            <ul className="flex flex-row gap-4">
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
