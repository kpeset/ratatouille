import { useParams, useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

export default function AreaDetails() {
  const { location } = useParams();

  const recipes = useLoaderData();

  return (
    <>
      <h1>Les futures recettes de : {location}</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </>
  );
}
