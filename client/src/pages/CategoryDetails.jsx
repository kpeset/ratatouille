import { useParams, useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

export default function CategoryDetails() {
  const { cat } = useParams();

  const recipes = useLoaderData();

  return (
    <>
      <h1>Liste des recettes pour la catégorie : {cat}</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </>
  );
}
