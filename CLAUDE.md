# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server
- **Build**: `npm run build` - Creates production build in `dist/`
- **Linting**: `npm run lint` - Runs ESLint on all files
- **Preview**: `npm run preview` - Preview production build locally
- **Deploy**: `npm run deploy` - Builds and deploys to GitHub Pages

## Project Architecture

This is a React application for browsing Marvel characters, built with Vite and deployed to GitHub Pages.

### Core Structure
- **Frontend**: React 19 with React Router for navigation
- **Styling**: TailwindCSS 4.x for all styling
- **Data Source**: MockAPI service for character data
- **Deployment**: GitHub Pages with base path `/Proyecto-Marvel/`

### Key Architecture Patterns
- Component-based architecture with dedicated folders per component
- Service layer for API interactions (`src/services/`)
- Centralized routing configuration (`src/config/routes.js`)
- Page-level components in `src/pages/`

### Data Flow
- Characters fetched from MockAPI with hero/villain filtering
- Local storage used for favorites functionality
- URL parameters used for character details and search filters

### Component Organization
- Each component has its own folder under `src/components/`
- Pages are organized in `src/pages/` with descriptive names
- Services handle all external API calls
- Route constants defined in `src/config/routes.js`

## Deployment Configuration

The app is configured for GitHub Pages deployment:
- Vite config includes `base: '/Proyecto-Marvel/'`
- React Router uses `basename='/Proyecto-Marvel'`
- Vercel config provides SPA fallback routing
- ESLint configured with React-specific rules

## API Integration

Character data comes from MockAPI endpoint:
- Base URL: `https://6810fac427f2fdac24138f1f.mockapi.io/api/v1/personajes`
- Supports pagination with `page` and `limit` parameters
- Filters by hero/villain status with `heroe` boolean parameter