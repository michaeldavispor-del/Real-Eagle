# Royal Eagle Real Estate Website

A premium, highly-animated, and SEO-friendly real estate platform built with Next.js App Router for Royal Eagle Real Estate in Dubai.

## Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

## Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Generate environment variables:
   Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   *(Optional)* Replace `YOUR_GOOGLE_MAPS_API_KEY` in `.env.local` and your maps code if you switch from iframe embeds to dynamic maps API in production.

## Running the Application

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev`: Starts the Next.js development server
- `npm run build`: Creates an optimized production build
- `npm run start`: Starts the production server
- `npm run lint`: Runs ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import the project.
3. Configure the build command as `npm run build` and output directory to `.next`.
4. Deploy the application.

### Netlify

1. Connect your repository on Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`

## How to replace mock data

The application currently uses static mock data from `src/data/properties.json`.
To connect to an external CMS (like Contentful, Sanity, or Strapi) or a backend database:
1. Update or replace the data imports in `app/listings/page.tsx` and `app/listings/[id]/page.tsx` with `fetch` requests or CMS SDK clients.
2. Refactor `Property` interface if the document schema differs.

## Accessibility & Performance

This site has been built following WCAG 2.1 AA accessibility guidelines. 
Always test new features with Lighthouse and `axe-core` before pushing to production. Proper ARIA attributes, semantic HTML, and focus management have been implemented. 

Images are lazy-loaded via Next.js `Image` component. Remember to verify caching layers in production.
