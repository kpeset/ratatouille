import { useLoaderData } from "react-router-dom";

export default function Area() {
  const meals = useLoaderData();

  return (
    <section>
      <h1>Choose a location</h1>
      {meals.map((meal) => (
        <p key={meal.strArea}>{meal.strArea}</p>
      ))}
    </section>
  );
}
