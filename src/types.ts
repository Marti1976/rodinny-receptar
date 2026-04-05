export enum Category {
  SNIDANE = "Snídaně",
  OBED = "Oběd",
  PRESNIDAVKA = "Přesnídávka",
  VECERE = "Večeře",
  EXTRA = "Extra",
  PECENI = "Pečení",
  ZAVAROVANI = "Zavařování"
}

export interface Ingredient {
  name: string;
  syn?: number;
  mamka?: number;
  extra?: number;
  unit: string;
  note?: string;
  alternatives?: string; // New field for zaměnitelnost
}

export interface ShoppingItem {
  id: string;
  name: string;
  amount?: string;
  checked: boolean;
  recipeId?: string;
}

export interface NutritionValues {
  kj: number;
  kcal: number;
  p: number;
  s: number;
  t: number;
}

export interface Recipe {
  id: string; // Changed to string to support suffixes like 1s, 2o
  category: Category;
  title: string;
  image?: string;
  instructions: string;
  ingredients: Ingredient[];
  nutrition?: {
    syn?: NutritionValues;
    mamka?: NutritionValues;
    originSyn?: 'X' | '';
    originMamka?: 'X' | '';
    extra?: {
      values: NutritionValues;
      unit: string; // e.g., "100g", "1ks", "porce"
    };
  };
}
