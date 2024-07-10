import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <Link to={`/recipes/${recipe.idMeal}`}>{recipe.strMeal}</Link>
      <p>{recipe.strArea} food</p>
    </article>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};
