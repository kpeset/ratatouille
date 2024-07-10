import axios from "axios";

export function getAreas() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
}

export function getRecipeById(id) {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.data.meals[0])
    .catch((error) => console.error(error));
}

export function getMealsByName(search) {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
}

export function getCategories() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.data.categories)
    .catch((error) => console.error(error));
}

export function getMealsByCategory(category) {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
}

export function getMealsByArea(area) {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
}
