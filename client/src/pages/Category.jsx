import { useLoaderData } from "react-router-dom";

export default function Category() {
  console.info(useLoaderData());

  return (
    <section>
      <h1>Nos catégories</h1>
    </section>
  );
}
