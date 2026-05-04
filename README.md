# 🦸 Heroes App - Frontend

[![React](https://img.shields.io/badge/React-19+-blue)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.0+-orange)](https://reactrouter.com/)
[![React Query](https://img.shields.io/badge/React%20Query-5.0+-purple)](https://tanstack.com/query/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-06B6D4)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0+-green)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-ISC-blue)]()

> Modern, responsive React heroes application with search functionality, favorite management, and optimized data fetching with React Query.

## 📋 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [State Management](#state-management)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Patterns and Best Practices](#patterns-and-best-practices)
- [Sustainability and Scalability](#sustainability-and-scalability)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Project Description

This is a modern **React frontend** for a heroes application that provides a complete user interface enabling users to:

- ✅ Search and browse superhero characters
- ✅ View detailed hero information
- ✅ Save favorite heroes
- ✅ Manage favorite heroes collection
- ✅ Real-time UI updates with optimized data fetching
- ✅ Responsive design across all devices

The frontend uses **React Query** for efficient server state management, **React Router** for navigation, **Context API** for client state (favorites), and **Tailwind CSS** for styling, ensuring optimal performance and maintainability.

---

## ✨ Features

### 🔍 Hero Search & Discovery
- Search heroes by name with real-time filtering
- Browse hero listings with pagination
- Detailed hero profile pages
- Hero image galleries
- Power and stats display

### ⭐ Favorite Management
- Add/remove heroes from favorites
- Persistent favorite list
- Quick favorite access
- Favorite count indicators
- Visual indicators for favorited heroes

### 🎨 User Interface
- Responsive design (mobile, tablet, desktop)
- Smooth page transitions
- Modern component library (Radix UI)
- Toast notifications
- Loading states and skeletons
- Error handling

### 📊 Data Management
- Efficient caching with React Query
- Automatic request deduplication
- Background refetching
- Optimistic updates
- Stale state handling

---

## 📸 Screenshots

### Hero List View
![image](assets/HeroList.png)

### Hero Detail Page
![image](assets/HeroDetail.png)

### Favorites Page
![image](assets/Favorites.png)

### Mobile Responsive
![image](assets/Mobile.png)

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|----------|
| **React** | ^19.1 | UI Framework |
| **React Router** | ^7.6 | Client-side routing |
| **React Query** | ^5.81 | Server state management |
| **Tailwind CSS** | ^4.1 | Styling & responsive design |
| **Radix UI** | ^1.0+ | Accessible components |
| **Axios** | ^1.10 | HTTP client |
| **TypeScript** | ^5.8 | Type safety |
| **Vite** | ^7.0 | Build tool & dev server |
| **Vitest** | ^3.2 | Unit testing |
| **Lucide React** | ^0.525 | Icon library |

---

## 🏗 Architecture

### Application Architecture

```
React App
├── Router Layer (React Router v7)
│   ├── Home Page
│   ├── Search Page
│   ├── Hero Detail Page
│   └── Favorites Page
│
├── Data Management
│   ├── Server State (React Query)
│   │   └── Hero API queries
│   │
│   └── Client State (Context API)
│       └── Favorites context
│
└── UI Layer
    ├── Components (Radix UI + Tailwind)
    ├── Hooks (custom data hooks)
    └── Layouts
```

### Component & Data Flow

```
App Component
├── Header
│   ├── SearchBar
│   └── Navigation
│
├── HeroList (useQuery to fetch heroes)
│   ├── HeroCard
│   │   ├── Image
│   │   ├── Name
│   │   ├── Stats
│   │   └── Favorite Button → useFavorites context
│   │
│   └── Pagination
│
├── HeroDetail (useQuery for single hero)
│   ├── Hero Image
│   ├── Hero Stats
│   ├── Power List
│   └── Favorite Button → useFavorites context
│
└── Favorites Page (useContext)
    └── Favorite Heroes List
```

### Request Flow with React Query

```
User Action (search for hero)
    ↓
Search Component dispatches query
    ↓
React Query: useQuery('hero-search', ...)
    ├─ Check cache
    ├─ Return cached data if exists
    └─ Fetch from API if not cached
    ↓
HTTP GET to hero API
    ↓
Response received
    ↓
React Query updates cache
    ↓
useQuery hooks detect state change
    ↓
Components re-render with new data
    ↓
UI updates without page reload ✓
```

---

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **Hero API** (or mock API configured)

### Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd 05-heroes-app-alt
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables** (see next section)

4. **Start development server**
```bash
npm run dev
# Application will be available at http://localhost:5173
```

---

## ⚙️ Configuration

### Environment Variables (.env.local)

Create a `.env.local` file in the project root:

```env
# Hero API Configuration
VITE_HERO_API_URL=https://superhero-api.com/api

# For local development with mock data:
# VITE_HERO_API_URL=http://localhost:3000/api
```

### Important Notes

- Vite uses `VITE_` prefix for environment variables
- The Hero API must be accessible from the frontend
- Mock data can be used for development
- API responses are cached by React Query

---

## 🚀 Usage

### Development
```bash
# Start dev server with hot reload
npm run dev
```

### Build for Production
```bash
# Run tests and create optimized build
npm run build

# Preview production build
npm run preview
```

### Testing
```bash
# Run all tests
npm run test

# Run tests in UI mode
npm run test:ui

# Generate coverage report
npm run coverage
```

### Expected Behavior
1. Page loads → fetches initial hero list
2. User searches → React Query caches results
3. Navigate to hero → loads hero details
4. Add to favorites → updates Context API state
5. Offline navigation → uses cached data

---

## 📂 Project Structure

```
src/
│
├── router/
│   └── app.router.ts           # React Router v7 configuration
│
├── heroes/
│   ├── api/
│   │   └── heroesApi.ts        # Axios instance & API calls
│   │
│   ├── context/
│   │   └── FavoriteHeroContext.tsx  # Favorites state management
│   │
│   ├── hooks/
│   │   ├── useHeroes.ts        # Fetch heroes list (React Query)
│   │   ├── useHeroDetail.ts    # Fetch single hero
│   │   ├── useFavorites.ts     # Manage favorites
│   │   └── useSearch.ts        # Search functionality
│   │
│   ├── actions/
│   │   ├── getAllHeroes.ts     # Hero list actions
│   │   ├── getHeroDetail.ts    # Hero detail actions
│   │   └── searchHeroes.ts     # Search actions
│   │
│   ├── types/
│   │   ├── Hero.ts             # Hero interface
│   │   ├── Api.ts              # API response types
│   │   └── index.ts
│   │
│   ├── components/
│   │   ├── HeroCard.tsx
│   │   ├── HeroList.tsx
│   │   ├── SearchBar.tsx
│   │   └── FavoriteButton.tsx
│   │
│   ├── pages/
│   │   ├── HeroListPage.tsx
│   │   ├── HeroDetailPage.tsx
│   │   └── FavoritesPage.tsx
│   │
│   └── layouts/
│       ├── HeroLayout.tsx
│       └── Navbar.tsx
│
├── admin/
│   ├── components/
│   ├── pages/
│   └── layouts/
│
├── components/
│   ├── ui/                      # Radix UI components
│   ├── shared/                  # Shared components
│   └── Navigation.tsx
│
├── lib/
│   └── utils.ts                # Utility functions
│
├── HeroesApp.tsx               # Root component
├── main.tsx                    # Entry point
├── index.css                   # Global styles
└── vite-env.d.ts              # Vite environment types
```

### Key Files

**`router/app.router.ts`** - React Router Configuration
- Defines all application routes
- Protected routes setup
- Nested routes structure

**`heroes/api/heroesApi.ts`** - API Configuration
- Axios instance setup
- Interceptors for error handling
- API endpoints definition

**`heroes/context/FavoriteHeroContext.tsx`** - Favorites State
- Manages favorite heroes list
- Provides context to entire app
- Local storage persistence

**`heroes/hooks/useHeroes.ts`** - Heroes Fetching
- `useQuery` hook for fetching heroes
- Caching configuration
- Error handling

**`heroes/hooks/useFavorites.ts`** - Favorites Management
- `useContext` hook for favorites
- Add/remove favorite functions
- Check if hero is favorite

**`heroes/actions/`** - Server Actions
- Fetch hero list
- Fetch hero details
- Search functionality

---

## 🎓 Patterns and Best Practices

### 1. **React Query for Server State**
```typescript
// heroes/hooks/useHeroes.ts
export const useHeroes = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['heroes'],
        queryFn: getAllHeroes,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000,   // 10 minutes
    });
    
    return { heroes: data, isLoading, error };
};
```

**Benefit:** Automatic caching, deduplication, and background refetching.

### 2. **Context API for Client State**
```typescript
// heroes/context/FavoriteHeroContext.tsx
const { addFavorite, removeFavorite, isFavorite } = useFavorites();

// Components don't know about implementation details
// Can be easily switched to Redux if needed
```

**Benefit:** Lightweight client state, no prop drilling, easy to maintain.

### 3. **Custom Hooks as Abstraction**
```typescript
// heroes/hooks/useHeroDetail.ts
export const useHeroDetail = (heroId: string) => {
    const { data: hero, isLoading } = useQuery({
        queryKey: ['hero', heroId],
        queryFn: () => getHeroDetail(heroId),
    });
    
    return { hero, isLoading };
};
```

**Benefit:** Components remain simple, logic centralized, easy to test.

### 4. **Separation of Concerns**
```
API Layer (heroes/api/)
    ↓ (HTTP requests)
Actions Layer (heroes/actions/)
    ↓ (query functions)
Hooks Layer (heroes/hooks/)
    ↓ (useQuery, useContext)
Components (heroes/components/)
    ↓ (render UI)
```

**Benefit:** Each layer has single responsibility, easy to modify and test.

### 5. **Type Safety with TypeScript**
```typescript
// heroes/types/Hero.ts
export interface Hero {
    id: string;
    name: string;
    image: string;
    stats: {
        intelligence: number;
        strength: number;
        speed: number;
    };
}

// Full type safety in components and hooks
const hero: Hero = data;
```

**Benefit:** Catches errors at compile time, better IDE support.

### 6. **Responsive Design with Tailwind**
```tsx
// Components use Tailwind responsive utilities
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Responsive grid: 1 col mobile, 2 tablet, 4 desktop */}
</div>
```

**Benefit:** Single codebase for all screen sizes.

---

## 📈 Sustainability and Scalability

### Sustainability

✅ **Maintainable Code**
- Custom hooks abstract complexity
- Clear component responsibilities
- Consistent naming conventions
- TypeScript for type safety
- Well-organized folder structure

✅ **Documentation**
- Complete README with architecture
- Type definitions as documentation
- Clear folder organization
- Inline comments for complex logic

✅ **State Management**
- React Query DevTools for debugging
- Context API for simple client state
- Clear separation between server and client state

### Scalability

📊 **Horizontal:**
- Stateless frontend (all server state in React Query)
- Multiple instances deployable
- Works with any hero API

📊 **Vertical:**
- React Query handles large datasets
- Efficient re-renders with useQuery
- Pagination support
- Lazy loading possible
- Search optimization

📊 **Future Improvements:**
```
- Advanced filtering and sorting
- Hero comparison tool
- Wishlist functionality
- Dark mode toggle
- Internationalization (i18n)
- Analytics integration
- Offline mode
- Performance optimization (code splitting, lazy loading)
- E2E testing (Cypress, Playwright)
- Component storybook
- PWA support
```

---

## 🌐 Deployment

### Deployed on Railway/Vercel

The frontend can be deployed to modern hosting platforms like Railway or Vercel.

**Current Deployment:** [Your Deployment URL]

### How to Deploy

1. **Connect GitHub Repository**
   - Go to railway.app or vercel.com
   - Create new project from GitHub
   - Select your heroes repository

2. **Configure Environment**
   ```env
   VITE_HERO_API_URL=https://api.superhero-provider.com
   ```

3. **Build Command**
   ```bash
   npm run build
   ```

4. **Start Command**
   ```bash
   npm run preview
   ```

5. **Deploy**
   - Automatic deployments on git push
   - Access at your deployment URL

### Deployment Features
- ✅ Automatic deployments from GitHub
- ✅ Environment variable management
- ✅ Build optimization
- ✅ Automatic HTTPS
- ✅ Domain configuration
- ✅ CDN for static assets

---

## 🔑 Key Highlights

### Why React Query?

| Challenge | Solution | Benefit |
|-----------|----------|---------|
| Managing API state | React Query `useQuery` | Automatic caching and updates |
| Avoiding redundant requests | Query deduplication | Faster performance |
| Handling async operations | Built-in loading/error states | Cleaner components |
| Syncing server and client | Automatic background refetch | Always fresh data |
| Debugging data flow | React Query DevTools | Easy troubleshooting |

### Tech Decisions

**React + React Query:**
- Automatic cache management
- Built-in request deduplication
- Background refetching
- DevTools for debugging

**React Router v7:**
- Modern nested routing
- Built-in data loading
- Type-safe route definitions

**Context API for Favorites:**
- Lightweight alternative to Redux
- Suitable for client-side state
- Easy to understand and maintain

**Tailwind CSS:**
- Utility-first approach
- Fast development
- Consistent styling
- Responsive design

---

## 🤝 Contributing

Contributions are welcome! For significant changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Use React Query for server state
- Use Context API for client state
- Test UI changes in different screen sizes
- Update README for new features
- Write unit tests for new logic

---

## 📝 Additional Notes

### Data Persistence
- Heroes list cached by React Query
- Favorites persisted in Context API + localStorage
- Automatic cache invalidation
- Background refetching for fresh data

### Development Tips
- Use React Query DevTools for debugging
- Check console for network requests
- Use TypeScript strict mode
- Test with different network speeds
- Use Vitest for unit testing

### Performance Considerations
- useQuery subscriptions are memoized
- React Query DevTools disabled in production
- Efficient component re-renders
- Automatic query deduplication
- Request cancellation on unmount

---

## 📄 License

This project is licensed under the **ISC** License.

---

## 👤 Author

**Fredy Velasquez**

**Frontend GitHub:** [Your GitHub Profile]  
**Live Demo:** [Your Deployment URL]

---

## 🔗 Related Projects

- **Course:** React Zero to Expert
- **Project Type:** Frontend Application
- **Related:** Calendar App, Admin Dashboard

---

*Last updated: 2026-05-03*



# Heroes App

## Launch dev

1. Clone the repo
2. Edit the `.env` file with the env variables 
3. Run the `npm install` command
4. Run the `npm run dev` command
