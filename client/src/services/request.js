import axios from "axios";

export function getAreas() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
}

export function getCategories() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
