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
      <h1>Ratatouille</h1>
      <p>Bienvenue sur notre site qui contient des milliards de recettes !</p>

      {/* Si je n'ai pas cliqué sur le bouton, je veux afficher "veuillez cliquer
        sur le bouton" sinon, je veux afficher la recette provenant de l'api */}
      <section className="random_recipe">
        {!recipe ? (
          <h3>Cliquez sur le bouton</h3>
        ) : (
          <RecipeCard recipe={recipe} />
        )}
      </section>
      <button type="button" onClick={getRandomRecipe}>
        Générer une recette
      </button>
    </>
  );
}
