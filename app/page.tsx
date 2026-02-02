import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ChefHat, Clock, Search } from 'lucide-react';
import RecipeCard from '@/components/RecipeCard';
import recipeIndex from '@/data/index.json';

export default function Home() {
  const featuredRecipes = recipeIndex.recipes.filter(recipe => recipe.featured);
  const categories = recipeIndex.categories.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          {/* Very light teal/blue overlay to integrate brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C2C55]/20 via-[#296374]/15 to-[#629FAD]/20"></div>
          {/* Additional subtle depth overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Abstract Brand-colored Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#629FAD]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-80 h-80 bg-[#F5FBE6]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#296374]/8 rounded-full blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32 w-full">
          {/* Hero Content Box with Border */}
          <div className="max-w-2xl border-2 border-[#629FAD]/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 backdrop-blur-md bg-[#0C2C55]/20 shadow-2xl">
            <h1 className="text-3xl md:text-6xl font-serif font-bold mb-4 md:mb-6 text-[#F5FBE6] leading-tight">
              Savor the Art of Cooking.
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-[#F5FBE6]/90 leading-relaxed">
              Discover Exquisite Recipes & Master Culinary Creations.
            </p>
            <Link
              href="/recipes"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#629FAD] to-[#296374] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all group text-sm md:text-base"
            >
              <ArrowUpRight className="mr-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Browse Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-[#FAFCF5] py-12 md:py-24 overflow-hidden">
        {/* Papery Texture Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Card 1 - Tested Recipes */}
            <div className="group relative bg-[#FAF8F1] rounded-3xl border-b-4 md:border-b-8 border-r-2 md:border-r-4 border-[#D4C5B0] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Grainy Vintage Texture Overlay */}
              <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '180px 180px'
              }}></div>
              {/* Inner Decorative Frame */}
              <div className="relative m-2 md:m-3 border-2 border-[#296374]/30 rounded-2xl p-6 md:p-8 text-center">
                <div className="bg-[#FAF8F1] w-24 h-24 md:w-36 md:h-36 rounded-2xl border-4 border-[#296374] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg p-4">
                  <img src="/chef-hat-vintage.png" alt="Chef Hat" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-4xl md:text-6xl font-serif font-black text-[#0C2C55] mb-2">{recipeIndex.recipes.length}+</h3>
                <p className="text-sm md:text-base text-[#296374] font-bold tracking-wide">Tested Recipes</p>
              </div>
            </div>

            {/* Card 2 - Quick */}
            <div className="group relative bg-[#FAF8F1] rounded-3xl border-b-4 md:border-b-8 border-r-2 md:border-r-4 border-[#D4C5B0] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Grainy Vintage Texture Overlay */}
              <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '180px 180px'
              }}></div>
              {/* Inner Decorative Frame */}
              <div className="relative m-2 md:m-3 border-2 border-[#296374]/30 rounded-2xl p-6 md:p-8 text-center">
                <div className="bg-[#FAF8F1] w-24 h-24 md:w-36 md:h-36 rounded-2xl border-4 border-[#296374] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg p-4">
                  <img src="/clock-vintage.png" alt="Clock" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-4xl md:text-6xl font-serif font-black italic text-[#0C2C55] mb-2">Quick</h3>
                <p className="text-sm md:text-base text-[#296374] font-bold tracking-wide">— Easy to Follow —</p>
              </div>
            </div>

            {/* Card 3 - Search */}
            <div className="group relative bg-[#FAF8F1] rounded-3xl border-b-4 md:border-b-8 border-r-2 md:border-r-4 border-[#D4C5B0] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Grainy Vintage Texture Overlay */}
              <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '180px 180px'
              }}></div>
              {/* Inner Decorative Frame */}
              <div className="relative m-2 md:m-3 border-2 border-[#296374]/30 rounded-2xl p-6 md:p-8 text-center">
                <div className="bg-[#FAF8F1] w-24 h-24 md:w-36 md:h-36 rounded-2xl border-4 border-[#296374] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg p-4">
                  <img src="/search-vintage.png" alt="Search" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-4xl md:text-6xl font-serif font-black italic text-[#0C2C55] mb-2">Search</h3>
                <p className="text-sm md:text-base text-[#296374] font-bold tracking-wide">Find Your Recipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="relative py-24 bg-gradient-to-br from-[#296374] to-[#629FAD] overflow-hidden">
        {/* Complex Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.15]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Abstract hexagonal shapes */}
                <path d="M 30 0 L 60 15 L 60 45 L 30 60 L 0 45 L 0 15 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" />
                <path d="M 90 0 L 120 15 L 120 45 L 90 60 L 60 45 L 60 15 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" />
                <path d="M 30 60 L 60 75 L 60 105 L 30 120 L 0 105 L 0 75 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" />
                <path d="M 90 60 L 120 75 L 120 105 L 90 120 L 60 105 L 60 75 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" />
                {/* Intersecting circles */}
                <circle cx="30" cy="30" r="15" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4" />
                <circle cx="90" cy="30" r="15" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4" />
                <circle cx="30" cy="90" r="15" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4" />
                <circle cx="90" cy="90" r="15" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4" />
                {/* Abstract connecting lines */}
                <path d="M 15 15 L 45 45 M 75 15 L 105 45 M 15 75 L 45 105 M 75 75 L 105 105" stroke="white" strokeWidth="0.5" opacity="0.3" />
                <path d="M 45 15 L 15 45 M 105 15 L 75 45 M 45 75 L 15 105 M 105 75 L 75 105" stroke="white" strokeWidth="0.5" opacity="0.3" />
                {/* Small dots */}
                <circle cx="30" cy="15" r="2" fill="white" opacity="0.5" />
                <circle cx="60" cy="30" r="2" fill="white" opacity="0.5" />
                <circle cx="90" cy="15" r="2" fill="white" opacity="0.5" />
                <circle cx="30" cy="75" r="2" fill="white" opacity="0.5" />
                <circle cx="60" cy="90" r="2" fill="white" opacity="0.5" />
                <circle cx="90" cy="75" r="2" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F5FBE6]/80 text-sm font-medium tracking-widest uppercase mb-4">Handpicked for You</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Featured Recipes</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light tracking-wide">Hand-picked favorites from my kitchen to yours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/recipes"
              className="inline-flex items-center px-12 py-5 bg-white/95 text-[#296374] rounded-full font-medium text-lg hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group backdrop-blur-sm"
            >
              View All Recipes
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-24 bg-[#FAFCF5] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#629FAD]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#296374]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#F5FBE6]/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#0C2C55] to-[#296374] bg-clip-text text-transparent mb-6">Browse by Category</h2>
            <p className="text-xl text-[#233D4D] max-w-2xl mx-auto font-light">Explore recipes organized by meal type</p>
          </div>

          {/* Asymmetric Grid Layout with Artistic Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => {
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];
              const delays = ['delay-0', 'delay-75', 'delay-100', 'delay-150', 'delay-200', 'delay-300'];
              
              return (
                <Link
                  key={category}
                  href={`/recipes?category=${encodeURIComponent(category)}`}
                  className={`group relative overflow-hidden transition-all duration-500 ${delays[index]} hover:rotate-0`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Main Card */}
                  <div className={`relative h-32 md:h-40 rounded-3xl bg-[#296374] p-6 md:p-8 flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${rotations[index]} hover:rotate-0`}>
                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white/10 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-lg transform -rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                    
                    {/* Subtle Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#629FAD]/0 to-[#629FAD]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#EDEDCE]/20 transition-all duration-300"></div>
                    
                    {/* Category Text */}
                    <h3 className="relative text-base md:text-lg font-bold text-white z-10 tracking-wide transform group-hover:scale-110 transition-transform duration-300">
                      {category}
                    </h3>
                    
                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-white/5 group-hover:border-b-[#EDEDCE]/15 transition-all duration-300"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#296374] text-white py-24 overflow-hidden">
        {/* Dense Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAxNiAwIEwgMCAwIDAgMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZBRkNGNSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-5 pointer-events-none"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FAFCF5]/80 text-sm font-medium tracking-widest uppercase mb-4">Stay Connected</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Never Miss a Recipe!
          </h2>
          <p className="text-xl mb-10 text-[#FAFCF5]/90 max-w-2xl mx-auto leading-relaxed">
            Follow me on social media for the latest recipes, cooking tips, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://youtube.com/@yourchannelname"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#296374] rounded-full font-bold hover:bg-[#FAFCF5] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#296374] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

