import { Category, Recipe } from "../types";

export const recipesZAV: Recipe[] = [
  {
    id: "z1",
    category: Category.ZAVAROVANI,
    title: "Testovací Zavařování 1",
    instructions: "Toto je testovací postup pro zavařování 1.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "100g" },
    }
  },
  {
    id: "z2",
    category: Category.ZAVAROVANI,
    title: "Testovací Zavařování 2",
    instructions: "Toto je testovací postup pro zavařování 2.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "1ks" },
    }
  },
  {
    id: "z3",
    category: Category.ZAVAROVANI,
    title: "Testovací Zavařování 3",
    instructions: "Toto je testovací postup pro zavařování 3.",
    ingredients: [{ name: "Testovací surovina", extra: 150, unit: "g" }],
    nutrition: {
      extra: { values: { kj: 99, kcal: 99, p: 99, s: 99, t: 99 }, unit: "100g" },
    }
  },
];
