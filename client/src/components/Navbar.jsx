import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/recipes">Nos recettes</Link>
      <Link to="/about">À propos de nous</Link>
    </nav>
  );
}
