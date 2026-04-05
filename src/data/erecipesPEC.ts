import { Category, Recipe } from "../types";

export const recipesPEC: Recipe[] = [
  {
    id: "p1",
    category: Category.PECENI,
    title: "Testovací Pečení 1",
    instructions: "Toto je testovací postup pro pečení 1.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "1ks" },
    }
  },
  {
    id: "p2",
    category: Category.PECENI,
    title: "Testovací Pečení 2",
    instructions: "Toto je testovací postup pro pečení 2.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "100g" },
    }
  },
  {
    id: "p3",
    category: Category.PECENI,
    title: "Testovací Pečení 3",
    instructions: "Toto je testovací postup pro pečení 3.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "1ks" },
    }
  },
];
