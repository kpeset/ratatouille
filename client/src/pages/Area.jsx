import { useLoaderData, Link } from "react-router-dom";

export default function Area() {
  const meals = useLoaderData();

  return (
    <section>
      <h1>Choose a location</h1>
      {meals.map((meal) => (
        <Link to={`/area/${meal.strArea}`} key={meal.strArea}>
          {meal.strArea}
        </Link>
      ))}
    </section>
  );
}
