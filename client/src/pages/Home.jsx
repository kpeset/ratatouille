import { useState } from "react";
import axios from "axios";

import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipe, setRandomeRecipe] = useState(null);

  const getRandomRecipe = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => setRandomeRecipe(response.data.meals[0]))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Simple recipes made for real, actual, everyday life.</h2>

      {/* Si je n'ai pas cliqué sur le bouton, je veux afficher "veuillez cliquer
        sur le bouton" sinon, je veux afficher la recette provenant de l'api */}
      <section className="random_recipe">
        <button
          className="cta_random_recipe"
          type="button"
          onClick={getRandomRecipe}
        >
          Générer une recette
        </button>
        {!recipe ? (
          <h3>Cliquez sur le bouton pour générer une recette</h3>
        ) : (
          <RecipeCard recipe={recipe} />
        )}
      </section>
    </>
  );
}
