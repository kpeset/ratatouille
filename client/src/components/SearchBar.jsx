import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/result/${search}`);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search_bar">
      <input
        onChange={handleChangeSearch}
        type="text"
        placeholder="Cherchez un plat"
      />
      <button onClick={redirect} type="button">
        Rechercher
      </button>
    </div>
  );
}
