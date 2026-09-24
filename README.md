# Béjaïa Tour

Tourist guide to Béjaïa (Saldae), Algeria — places to visit, a film of the coast, practical FAQ and a trip-planning contact form.

Live: https://bejaia-tour.netlify.app

## Stack

React 18 (Create React App), React Router 6, Framer Motion, React Hook Form, EmailJS.

## Scripts

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build in build/
```

## Structure

```
src/
  data/        places.js (places, categories), faq.js
  components/  Navbar, Footer, PlaceCard, Page (title + transition), Icon (inline SVG)
  pages/       Home, Places, Place, Videos, About, Contact, Faq, NotFound
  hooks/       useTheme (light / dark, remembered)
  styles/      global.css (design tokens, base, shared components)
  assets/      optimised WebP images, film
public/_redirects   SPA fallback for Netlify (deep links and refresh)
```

To add a place, add an entry to `src/data/places.js` (slug, category, image, excerpt, facts, description).

## Contact form

The form sends through EmailJS. The identifiers can be overridden with the variables listed in `.env.example`.
