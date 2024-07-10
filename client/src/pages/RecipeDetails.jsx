import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const meal = useLoaderData();

  return (
    <section>
      <h2>{meal.strMeal}</h2>
      <div className="recipe_content">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p style={{ whiteSpace: "pre-wrap" }}>{meal.strInstructions}</p>
      </div>
    </section>
  );
}
