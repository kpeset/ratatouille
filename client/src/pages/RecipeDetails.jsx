import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>Le détail de ma recette - numéro {id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae
        voluptate quibusdam aliquam vitae earum nam nemo eos laborum voluptates
        aperiam minus a esse nostrum, voluptas officiis, vero magni quis?
      </p>
    </>
  );
}
