export {}

// This file is a stub to make TypeScript recognize the .json imports
declare module '@/data/index.json' {
  import { RecipeIndex } from '@/types/recipe';
  const value: RecipeIndex;
  export default value;
}

declare module '@/data/recipes/*.json' {
  import { Recipe } from '@/types/recipe';
  const value: Recipe;
  export default value;
}
