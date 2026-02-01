'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import RecipeCard from '@/components/RecipeCard';
import { RecipeSummary } from '@/types/recipe';
import recipeIndex from '@/data/index.json';
import Fuse from 'fuse.js';
import { Filter, X, Search, ChevronDown } from 'lucide-react';

export default function RecipesPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [showFilters, setShowFilters] = useState(false);

  // Initialize Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(recipeIndex.recipes, {
      keys: ['title', 'description', 'tags', 'cuisine', 'category'],
      threshold: 0.3,
      includeScore: true,
    });
  }, []);

  // Filter recipes based on search and filters
  const filteredRecipes = useMemo(() => {
    let results: RecipeSummary[] = recipeIndex.recipes;

    // Apply search
    if (searchTerm.trim()) {
      const fuseResults = fuse.search(searchTerm);
      results = fuseResults.map(result => result.item);
    }

    // Apply category filter
    if (selectedCategory) {
      results = results.filter(recipe => recipe.category === selectedCategory);
    }

    // Apply cuisine filter
    if (selectedCuisine) {
      results = results.filter(recipe => recipe.cuisine === selectedCuisine);
    }

    // Apply difficulty filter
    if (selectedDifficulty) {
      results = results.filter(recipe => recipe.difficulty === selectedDifficulty);
    }

    return results;
  }, [searchTerm, selectedCategory, selectedCuisine, selectedDifficulty, fuse]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedCuisine('');
    setSelectedDifficulty('');
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategory || selectedCuisine || selectedDifficulty || searchTerm;

  return (
    <div className="bg-[#FAFCF5] min-h-screen pt-20">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#629FAD]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#296374]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Page Header */}
      <div className="relative z-10 bg-white/50 backdrop-blur-sm border-b border-[#296374]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0C2C55] mb-4">
            The Collection
          </h1>
          <p className="text-xl text-[#233D4D]/80 max-w-2xl font-light">
            Browse our complete catalogue of {recipeIndex.recipes.length} carefully curated recipes, designed to bring joy to your kitchen.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-6 py-3 px-4 bg-white border border-[#296374]/20 rounded-xl text-[#0C2C55] font-bold shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-[#296374]" />
                Filter Recipes
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile Backdrop */}
            {showFilters && (
              <div 
                className="fixed inset-0 bg-[#0C2C55]/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setShowFilters(false)}
              />
            )}

            <div className={`
              bg-white p-6 
              lg:rounded-2xl lg:sticky lg:top-24 lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:border lg:border-[#296374]/10 lg:space-y-8
              ${showFilters 
                ? 'fixed inset-x-0 bottom-0 z-50 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] max-h-[85vh] overflow-y-auto w-full border-t border-[#296374]/10 space-y-6 pb-10 animate-in slide-in-from-bottom-10 duration-300' 
                : 'hidden'} 
              lg:block
            `}>
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-2 lg:hidden">
                 <h2 className="text-xl font-serif font-bold text-[#0C2C55]">Refine Search</h2>
                 <button onClick={() => setShowFilters(false)} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                   <X className="w-5 h-5 text-[#233D4D]" />
                 </button>
              </div>

              <div className="flex items-center justify-between mb-6 hidden lg:flex">
                <h2 className="text-xl font-serif font-bold text-[#0C2C55] flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-[#296374]" />
                  Refine Search
                </h2>
              </div>
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#296374]/50" />
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAFCF5] border-2 border-[#E1E5E9] rounded-xl text-[#233D4D] placeholder-[#233D4D]/40 focus:outline-none focus:border-[#296374] transition-colors"
                  />
                </div>

                {/* Categories */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#629FAD]">Category</h3>
                    {selectedCategory && (
                     <button onClick={() => setSelectedCategory('')} className="text-xs text-[#296374] hover:underline">Clear</button>
                    )}
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {recipeIndex.categories.map((category) => (
                      <label key={category} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-[#FAFCF5] transition-colors">
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${selectedCategory === category ? 'border-[#296374]' : 'border-gray-300'}`}>
                          {selectedCategory === category && <div className="w-2 h-2 rounded-full bg-[#296374]" />}
                        </div>
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="hidden"
                        />
                        <span className={`text-sm ${selectedCategory === category ? 'text-[#0C2C55] font-bold' : 'text-[#233D4D] group-hover:text-[#296374]'}`}>
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cuisine */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#629FAD]">Cuisine</h3>
                     {selectedCuisine && (
                     <button onClick={() => setSelectedCuisine('')} className="text-xs text-[#296374] hover:underline">Clear</button>
                    )}
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {recipeIndex.cuisines.map((cuisine) => (
                      <label key={cuisine} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-[#FAFCF5] transition-colors">
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${selectedCuisine === cuisine ? 'border-[#296374]' : 'border-gray-300'}`}>
                          {selectedCuisine === cuisine && <div className="w-2 h-2 rounded-full bg-[#296374]" />}
                        </div>
                        <input
                          type="radio"
                          name="cuisine"
                          value={cuisine}
                          checked={selectedCuisine === cuisine}
                          onChange={(e) => setSelectedCuisine(e.target.value)}
                          className="hidden"
                        />
                        <span className={`text-sm ${selectedCuisine === cuisine ? 'text-[#0C2C55] font-bold' : 'text-[#233D4D] group-hover:text-[#296374]'}`}>
                          {cuisine}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#629FAD]">Difficulty</h3>
                     {selectedDifficulty && (
                     <button onClick={() => setSelectedDifficulty('')} className="text-xs text-[#296374] hover:underline">Clear</button>
                    )}
                  </div>
                  <div className="space-y-2">
                    {['Easy', 'Medium', 'Hard'].map((difficulty) => (
                      <label key={difficulty} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-[#FAFCF5] transition-colors">
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${selectedDifficulty === difficulty ? 'border-[#296374]' : 'border-gray-300'}`}>
                          {selectedDifficulty === difficulty && <div className="w-2 h-2 rounded-full bg-[#296374]" />}
                        </div>
                        <input
                          type="radio"
                          name="difficulty"
                          value={difficulty}
                          checked={selectedDifficulty === difficulty}
                          onChange={(e) => setSelectedDifficulty(e.target.value)}
                          className="hidden"
                        />
                        <span className={`text-sm ${selectedDifficulty === difficulty ? 'text-[#0C2C55] font-bold' : 'text-[#233D4D] group-hover:text-[#296374]'}`}>
                          {difficulty}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full py-3 px-4 bg-[#0C2C55] text-white rounded-xl text-sm font-bold hover:bg-[#296374] hover:shadow-lg transition-all duration-300"
                  >
                    Reset All Filters
                  </button>
                )}
            </div>
          </aside>

          {/* Recipe Grid */}
          <main className="flex-1">
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-[#296374]/10">
                <div className="inline-block p-4 rounded-full bg-[#FAFCF5] mb-4">
                  <Search className="w-8 h-8 text-[#629FAD]" />
                </div>
                <h3 className="text-xl font-bold text-[#0C2C55] mb-2">No recipes found</h3>
                <p className="text-[#233D4D]/70 mb-6">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-[#0C2C55] text-white rounded-lg font-bold hover:bg-[#296374] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
