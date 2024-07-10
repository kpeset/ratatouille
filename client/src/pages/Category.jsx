import { useLoaderData } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";

export default function Category() {
  const categories = useLoaderData();

  return (
    <section>
      <h1>Nos catégories</h1>
      {categories.map((category) => (
        <CategoryCard key={category.idCategory} category={category} />
      ))}
    </section>
  );
}
