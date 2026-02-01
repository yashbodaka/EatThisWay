import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChefHat, Star } from 'lucide-react';
import { RecipeSummary } from '@/types/recipe';

interface RecipeCardProps {
  recipe: RecipeSummary;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="group">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 md:h-56 w-full bg-gray-200 overflow-hidden shrink-0">
          <Image
            src={recipe.images.thumbnail}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {recipe.featured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-[#296374] to-[#629FAD] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold shadow-lg">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 flex-1 flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-[#233D4D] mb-2 group-hover:text-[#296374] transition-colors line-clamp-2">
            {recipe.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">{recipe.description}</p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-[#233D4D]/70 mb-3">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-[#629FAD]" />
              <span>{recipe.totalTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <ChefHat className="w-4 h-4 text-[#296374]" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-[#F4D35E] text-[#F4D35E]" />
              <span className="font-semibold text-[#0C2C55]">{recipe.rating}</span>
            </div>
            <span className="text-[#233D4D]/60 text-sm">({recipe.reviewCount} reviews)</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-[#629FAD]/20 text-[#0C2C55] rounded-full text-xs font-medium">
              {recipe.cuisine}
            </span>
            <span className="px-2 py-1 bg-[#296374]/20 text-[#0C2C55] rounded-full text-xs font-medium">
              {recipe.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
