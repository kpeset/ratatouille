// Utilisation du useEffect pour fetcher de la data

import { useEffect, useState } from "react";
import axios from "axios";

export default function AreaWithUseEffect() {
  const [areas, setAreas] = useState([]);

  const getAreas = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => setAreas(response.data.meals))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAreas();
  }, []);

  console.info(areas);

  return (
    <section>
      <h1>Choose a location</h1>
      {areas.map((area) => (
        <p key={area.strArea}>{area.strArea}</p>
      ))}
    </section>
  );
}
