import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ChefHat, Users, Star, ArrowLeft } from 'lucide-react';
import { Recipe } from '@/types/recipe';
import recipeIndex from '@/data/index.json';
import PrintButton from '@/components/PrintButton';

// Generate static params for all recipes
export async function generateStaticParams() {
  return recipeIndex.recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = await getRecipe(slug);
  
  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    };
  }

  return {
    title: `${recipe.title} - Eat This Way`,
    description: recipe.description,
    keywords: [...recipe.tags, recipe.cuisine, recipe.category].join(', '),
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [recipe.images.main],
      type: 'article',
    },
  };
}

async function getRecipe(slug: string): Promise<Recipe | null> {
  try {
    const recipeData = await import(`@/data/recipes/${slug}.json`);
    return recipeData.default as Recipe;
  } catch {
    return null;
  }
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = await getRecipe(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="bg-[#FAFCF5] min-h-screen pt-20">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#629FAD]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#296374]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Back Button */}
      <div className="relative z-10 bg-white/50 backdrop-blur-sm border-b border-[#296374]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/recipes" className="inline-flex items-center text-[#233D4D] hover:text-[#0C2C55] font-medium transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Recipes
          </Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Recipe Header */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden mb-12 border border-[#296374]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Recipe Image */}
            <div className="relative h-96 lg:h-full min-h-[500px]">
              <Image
                src={recipe.images.main}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2C55]/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0C2C55]/10"></div>
            </div>

            {/* Recipe Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-white relative overflow-hidden">
               {/* Decorative background for info side */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAFCF5] rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-4 py-1.5 bg-[#629FAD]/10 text-[#0C2C55] rounded-full text-sm font-bold tracking-wide uppercase">
                    {recipe.cuisine}
                  </span>
                  <span className="px-4 py-1.5 bg-[#296374]/10 text-[#0C2C55] rounded-full text-sm font-bold tracking-wide uppercase">
                    {recipe.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0C2C55] mb-6 leading-tight">{recipe.title}</h1>
                <p className="text-lg text-[#233D4D]/80 mb-8 leading-relaxed font-light">{recipe.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-8 bg-[#FAFCF5] inline-flex px-4 py-2 rounded-xl">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(recipe.rating)
                            ? 'fill-[#F4D35E] text-[#F4D35E]'
                            : 'text-[#E1E5E9]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-[#0C2C55] text-lg ml-2">{recipe.rating}</span>
                  <span className="text-[#233D4D]/60 text-sm">({recipe.reviewCount} reviews)</span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-[#FAFCF5] rounded-2xl border border-[#296374]/5 hover:border-[#296374]/20 transition-colors">
                    <Clock className="w-6 h-6 text-[#629FAD] mx-auto mb-2" />
                    <p className="text-xs uppercase tracking-widest text-[#233D4D]/60 mb-1">Prep</p>
                    <p className="font-serif font-bold text-[#0C2C55] text-lg">{recipe.prepTime}m</p>
                  </div>
                  <div className="text-center p-4 bg-[#FAFCF5] rounded-2xl border border-[#296374]/5 hover:border-[#296374]/20 transition-colors">
                    <Clock className="w-6 h-6 text-[#296374] mx-auto mb-2" />
                    <p className="text-xs uppercase tracking-widest text-[#233D4D]/60 mb-1">Cook</p>
                    <p className="font-serif font-bold text-[#0C2C55] text-lg">{recipe.cookTime}m</p>
                  </div>
                  <div className="text-center p-4 bg-[#FAFCF5] rounded-2xl border border-[#296374]/5 hover:border-[#296374]/20 transition-colors">
                    <Users className="w-6 h-6 text-[#0C2C55] mx-auto mb-2" />
                    <p className="text-xs uppercase tracking-widest text-[#233D4D]/60 mb-1">Serves</p>
                    <p className="font-serif font-bold text-[#0C2C55] text-lg">{recipe.servings}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#296374]/10 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#296374]/10 rounded-full">
                         <ChefHat className="w-5 h-5 text-[#296374]" />
                    </div>
                    <span className="text-[#0C2C55] font-semibold">{recipe.difficulty} Level</span>
                  </div>
                  <PrintButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="order-2 lg:order-1 lg:col-span-8 space-y-12">
            {/* Instructions */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 border border-[#296374]/10">
              <h2 className="text-3xl font-serif font-bold text-[#0C2C55] mb-8 flex items-center">
                <span className="mr-4 text-[#629FAD]">01.</span> Instructions
              </h2>
              <div className="space-y-8">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="group flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#296374] text-white rounded-full flex items-center justify-center font-serif text-xl font-bold shadow-lg shadow-[#296374]/20 group-hover:bg-[#0C2C55] transition-colors">
                      {instruction.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-[#233D4D] text-lg leading-relaxed">{instruction.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes Section */}
            {recipe.notes && recipe.notes.length > 0 && (
              <div className="bg-[#FAFCF5] rounded-3xl p-8 md:p-10 border border-[#296374]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#296374]/5 rounded-bl-full"></div>
                
                <h2 className="text-2xl font-serif font-bold text-[#0C2C55] mb-6 flex items-center relative z-10">
                   Chef&apos;s Notes
                </h2>
                <ul className="space-y-4 relative z-10">
                  {recipe.notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#296374] mr-3 mt-1 text-lg">💡</span>
                      <span className="text-[#233D4D] italic leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs Section */}
            {recipe.faqs && recipe.faqs.length > 0 && (
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 border border-[#296374]/10">
                <h2 className="text-3xl font-serif font-bold text-[#0C2C55] mb-8 flex items-center">
                  <span className="mr-4 text-[#629FAD]">02.</span> FAQ
                </h2>
                <div className="space-y-6">
                  {recipe.faqs.map((faq, index) => (
                    <div key={index} className="bg-[#FAFCF5] rounded-xl p-6 border border-[#296374]/5 hover:border-[#296374]/20 transition-colors">
                      <h3 className="font-bold text-[#0C2C55] mb-3 text-lg">{faq.question}</h3>
                      <p className="text-[#233D4D]/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Ingredients */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-[#296374]/10">
                <h2 className="text-2xl font-serif font-bold text-[#0C2C55] mb-6 border-b border-[#296374]/10 pb-4">Ingredients</h2>
                <ul className="space-y-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 rounded-full bg-[#629FAD] mt-2.5 mr-3 group-hover:bg-[#296374] transition-colors"></div>
                      <span className="text-[#233D4D] leading-relaxed">
                        <span className="font-bold text-[#0C2C55]">
                          {ingredient.amount} {ingredient.unit}
                        </span>{' '}
                        {ingredient.item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#296374]/10">
                   <p className="text-xs text-[#233D4D]/50 text-center italic">Check your pantry before shopping!</p>
                </div>
              </div>

              {/* Nutrition Facts */}
              {recipe.nutritionFacts && (
                <div className="bg-[#FAFCF5] rounded-3xl p-8 border border-[#296374]/10">
                  <h2 className="text-xl font-serif font-bold text-[#0C2C55] mb-6">Nutrition Facts</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-[#296374]/10">
                      <span className="text-[#233D4D]/70">Calories</span>
                      <span className="font-bold text-[#0C2C55]">{recipe.nutritionFacts.calories}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#296374]/10">
                      <span className="text-[#233D4D]/70">Protein</span>
                      <span className="font-bold text-[#0C2C55]">{recipe.nutritionFacts.protein}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#296374]/10">
                      <span className="text-[#233D4D]/70">Carbs</span>
                      <span className="font-bold text-[#0C2C55]">{recipe.nutritionFacts.carbs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#233D4D]/70">Fat</span>
                      <span className="font-bold text-[#0C2C55]">{recipe.nutritionFacts.fat}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="rounded-3xl p-6 border-2 border-dashed border-[#296374]/20">
                <h2 className="text-lg font-bold text-[#0C2C55] mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-[#296374]/10 text-[#233D4D] rounded-lg text-sm font-medium hover:border-[#296374] transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
