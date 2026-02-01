export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  author: {
    name: string;
    avatar: string;
  };
  images: {
    main: string;
    thumbnail: string;
    gallery?: string[];
  };
  videoUrl?: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutritionFacts?: NutritionFacts;
  tags: string[];
  dietaryInfo: string[];
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
  notes?: string[];
  faqs?: FAQ[];
}

export interface Ingredient {
  item: string;
  amount: string;
  unit: string;
  section?: string;
}

export interface Instruction {
  step: number;
  text: string;
  image?: string;
}

export interface NutritionFacts {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RecipeIndex {
  categories: string[];
  cuisines: string[];
  tags: string[];
  recipes: RecipeSummary[];
}

export interface RecipeSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  cuisine: string;
  difficulty: string;
  totalTime: number;
  images: {
    thumbnail: string;
  };
  tags: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
}
