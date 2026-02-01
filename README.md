# Chef's Kitchen - Recipe Website

A modern, responsive recipe website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful landing page, searchable recipe catalogue, individual recipe pages with video embeds, and social media integration.

## 🚀 Features

- **Landing Page**: Eye-catching hero section with featured recipes and category browsing
- **Recipe Catalogue**: Browse all recipes with advanced filtering and search
- **Search Functionality**: Fuzzy search using Fuse.js for finding recipes by name, ingredients, or tags
- **Recipe Detail Pages**: Full recipe information including:
  - Ingredients list
  - Step-by-step instructions
  - YouTube video embed
  - Nutrition facts
  - Prep/cook times, servings, difficulty
  - Rating and reviews
- **Social Media Integration**: Links to YouTube, Facebook, and Instagram
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: 
  - Meta tags and OpenGraph support
  - Auto-generated sitemap
  - Schema.org Recipe markup
- **Performance**: Static site generation for fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Search**: Fuse.js
- **Video Player**: React Player
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
recipe_website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Landing page
│   ├── recipes/           # Recipe pages
│   │   ├── page.tsx       # Recipe catalogue
│   │   └── [slug]/        # Dynamic recipe detail pages
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── Header.tsx        # Navigation header with search
│   ├── Footer.tsx        # Footer with social links
│   └── RecipeCard.tsx    # Recipe card component
├── data/                 # Recipe data (JSON)
│   ├── index.json        # Recipe index/catalogue
│   └── recipes/          # Individual recipe files
├── types/                # TypeScript type definitions
│   └── recipe.ts         # Recipe interfaces
├── public/               # Static assets
└── package.json          # Dependencies
```

## 📝 Adding New Recipes

1. Create a new JSON file in `data/recipes/` (e.g., `my-recipe.json`)
2. Follow the existing recipe structure in other recipe files
3. Add the recipe summary to `data/index.json` in the `recipes` array
4. The recipe will automatically appear on the website!

## 🎨 Customization

### Update Social Media Links

Edit the Footer component (`components/Footer.tsx`) and update the social media URLs:
- YouTube: Replace `@yourchannelname` with your channel
- Facebook: Replace `yourpage` with your page name
- Instagram: Replace `yourusername` with your username

### Change Branding

- Update site title in `app/layout.tsx`
- Change "Chef's Kitchen" to your brand name in `components/Header.tsx`
- Update colors in Tailwind classes (orange-600, etc.)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy!
5. Update the domain in `app/sitemap.ts` and `app/robots.ts`

### Build for Production

```bash
npm run build
npm start
```

## 📱 Social Media Setup

Remember to:
1. Create your YouTube channel
2. Set up Facebook page
3. Create Instagram business account
4. Update all links in the Footer component

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

---

**Happy Cooking! 🍳👨‍🍳**


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
