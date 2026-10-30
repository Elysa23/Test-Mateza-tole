import { Banknote } from "lucide-react";
import { Palette } from "lucide-react";
import { Ruler } from "lucide-react";

function Filtre() {
  return (
    <div className="flex flex-col align-items justify-between gap-4 py-12 w-xs">
      <div className="flex flex-col justify-between gap-6 text-left border rounded-2xl py-12 px-6 ">
        <div className="flex flex-row justify-between items-center gap-2">
          <h2 className="flex flex-row justify-between items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search h-5 w-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            Rechercher{" "}
          </h2>
          <button className="text-left hover:bg-red-700/30 hover:border-red-700/30  hover:rounded-2xl px-2 py-1 ">
            Réinitialiser
          </button>
        </div>
        <input
          type="text"
          placeholder="Nom du produit..."
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col justify-between gap-8 text-left border rounded-2xl py-12 px-6 ">
        <div className="flex flex-col justify-between items-start gap-8">
          <h2 className="flex flex-row justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-filter h-5 w-5"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            Catégories
          </h2>
          <div>
            <p>Impossible de charger les categories.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 text-left border rounded-2xl py-12 px-6 ">
        <div className="flex flex-col justify-between items-start gap-8">
          <h2 className="flex flex-row justify-between items-center gap-2">
            <Banknote className="size-6" />
            Prix (Ar)
          </h2>
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="min-w-0">
              <h4>PRIX MIN</h4>
              <input
                type="number"
                placeholder="0"
                className="w-full min-w-0 border rounded-md p-2"
              />
            </div>
            <div className="min-w-0">
              <h4>PRIX MAX</h4>
              <input
                type="number"
                placeholder="0"
                className="w-full min-w-0 border rounded-md p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 text-left border rounded-2xl py-12 px-6 ">
        <div className="flex flex-col justify-between items-start gap-8">
          <h2 className="flex flex-row justify-between items-center gap-2">
            <Palette className="size-6" />
            Couleurs
          </h2>
          <i>Aucune couleur disponible</i>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 text-left border rounded-2xl py-12 px-6 ">
        <div className="flex flex-col justify-between items-start gap-8">
          <h2 className="flex flex-row justify-between items-center gap-2">
            <Ruler className="size-6" />
            Epaisseur (mm)
          </h2>
          <i>Aucune épaisseur disponible</i>
        </div>
      </div>
    </div>
  );
}

export default Filtre;
