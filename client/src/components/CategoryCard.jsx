import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CategoryCard({ category }) {
  return (
    <div>
      <h2>{category.strCategory}</h2>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <Link to={`/category/${category.strCategory}`}>Consulter</Link>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
  }).isRequired,
};
