import { Category, Recipe } from "../types";
import { recipesImages } from "./recipesImages";

export const recipesEXT: Recipe[] = [
  {
    id: "e1",
    category: Category.EXTRA,
    title: "Testovací Extra Recept 1",
    image: recipesImages["e1"],
    instructions: "Toto je testovací postup pro extra recept 1.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "100g" },
    }
  },
  {
    id: "e2",
    category: Category.EXTRA,
    title: "Testovací Extra Recept 2",
    image: recipesImages["e2"],
    instructions: "Toto je testovací postup pro extra recept 2.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "1ks" },
    }
  },
  {
    id: "e3",
    category: Category.EXTRA,
    title: "Testovací Extra Recept 3",
    image: recipesImages["e3"],
    instructions: "Toto je testovací postup pro extra recept 3.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "100g" },
    }
  },
];
