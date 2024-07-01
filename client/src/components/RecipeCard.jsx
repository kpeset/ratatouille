import PropTypes from "prop-types";

export default function RecipeCard({ recipe }) {
  console.info("Recipe depuis RecipeCard : ", recipe);
  return (
    <article>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strArea} food</p>
    </article>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
  }).isRequired,
};
