import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Category from "./pages/Category";
import About from "./pages/About";
import Area from "./pages/Area";
import Result from "./pages/Result";

import {
  getAreas,
  getCategories,
  getRecipeById,
  getMealsByName,
} from "./services/request";

import "./styles/app.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/recipeCard.css";
import "./styles/recipeDetails.css";
import "./styles/searchbar.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
        loader: ({ params }) => getRecipeById(params.id),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/category",
        element: <Category />,
        loader: getCategories,
      },
      {
        path: "/area",
        element: <Area />,
        loader: getAreas,
      },
      {
        path: "/result/:search",
        element: <Result />,
        loader: ({ params }) => getMealsByName(params.search),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
