import { useLoaderData } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

export default function Result() {
  const meals = useLoaderData();

  const convertToPlurial = () => (meals.length < 2 ? "resultat" : "résultats");

  return (
    <section>
      {meals === null
        ? "Aucun résultat pour cette recette"
        : `Il y a ${meals.length} ${convertToPlurial()}`}
      {!meals
        ? null
        : meals.map((meal) => <RecipeCard key={meal.idMeal} recipe={meal} />)}
    </section>
  );
}
