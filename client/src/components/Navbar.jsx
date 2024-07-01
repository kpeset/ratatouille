import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h2>Ratatouille</h2>
        <h3>tout le monde peut cuisiner</h3>
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/recipes">Nos recettes</Link>
        <Link to="/about">À propos de nous</Link>
      </nav>
    </header>
  );
}
