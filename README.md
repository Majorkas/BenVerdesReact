# Ben Verdes Portfolio - React Conversion

This project is a React conversion of a static HTML/CSS/JavaScript portfolio website for musician and composer Ben Verdes.

## Migration Overview

The original website was built with vanilla HTML, CSS, and JavaScript. It has been converted to a modern React single-page application while maintaining all original functionality and styling.

### Key Changes in the Migration

1. **From Multiple HTML Files to Components** - Converted separate HTML sections into reusable React components
2. **Event Listeners to React Hooks** - Replaced `DOMContentLoaded` event listeners with `useEffect()` hooks
3. **HTML Attributes to JSX** - Changed `class` to `className`, inline styles to object syntax
4. **JavaScript URLs to Event Handlers** - Replaced `href="javascript:void(0)"` with `onClick` handlers

## Project Structure

```
benverdes-react/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles for the entire application
│   └── main.jsx         # React entry point
├── public/
│   └── assets/          # Images, fonts, and other static files
└── README.md
```

## Component Breakdown

### `App` Component (Root)
The main application component that:
- Contains all child components
- Uses `useEffect()` to handle scroll-based animations and navigation visibility
- Manages three main scroll effects:
  - Navbar fade in/out based on scroll position
  - Hero title fade in on page load
  - Hero title fade out as user scrolls

**Key React Concepts Used:**
- `useEffect()` with empty dependency array `[]` to run once after initial render
- Cleanup function to remove event listeners when component unmounts
- Multiple event listeners (scroll, resize, load) managed in a single effect

### `Nav` Component
Responsive navigation bar with:
- Desktop horizontal menu
- Mobile hamburger menu toggle
- Smooth scroll links to page sections

**Implementation Details:**
- Uses `onClick` handler instead of `<a href="javascript:void(0)">`
- `navBar()` function toggles responsive class for mobile menu
- Fixed positioning that becomes visible after scrolling past hero

### `Hero` Component
Full-screen hero section featuring:
- Large centered title with Ben Verdes' name
- Fade-in animation on page load
- Fade-out animation on scroll
- Anchor point for smooth scrolling

**React Improvements:**
- Separated into its own component for reusability
- Animation controlled by parent `useEffect()` in App component
- Uses CSS classes toggled via JavaScript for smooth animations

### `About` Component
Simple text section with biographical information.

**Why it's a Component:**
- Separates content from structure
- Easy to update biography without touching layout code
- Could be enhanced later to accept props for dynamic content

### `HeadingOne` & `HeadingTwo` Components
Reusable heading components that accept props:

```jsx
<HeadingOne id="about" heading="About Me" />
<HeadingTwo heading="Studio" />
```

**Props Used:**
- `id` - For scroll navigation anchors
- `heading` - Text content to display

**Benefits:**
- Consistent styling across all section headings
- Single source of truth for heading structure
- Easy to change all headings at once

### `Studio` Component
Displays studio recordings with:
- Section heading
- Grid of `StudioCard` components
- Embedded Spotify players

**Component Composition:**
```jsx
<Studio>
  └── <StudioCard> (multiple instances)
      ├── heading prop
      ├── songID prop (Spotify embed URL)
      └── desc prop
```

### `StudioCard` Component
Individual card for each studio track featuring:
- Song title
- Embedded Spotify player (`<iframe>`)
- Description text

**Props:**
- `heading` - Song title
- `songID` - Spotify embed URL
- `desc` - Song description

### `FilmMedia` Component
Similar structure to `Studio`, displays:
- Film scoring work
- Grid of `FilmCard` components
- Video embeds or descriptions

### `FilmCard` Component
Individual card for film work with similar prop structure to `StudioCard`.

### `ContactForm` Component
Contact form with FormSubmit integration:
- Name, email, and message fields
- FormSubmit.co backend (no server needed)
- Honeypot spam protection
- Redirects to thank you page on submission

**React-Specific Changes:**
- `style="display:none"` → `style={{display: 'none'}}`
- `class` → `className`
- Form action points to FormSubmit API

## Key React Concepts Applied

### 1. Component-Based Architecture
Breaking the UI into small, reusable pieces:
- Each section is a separate component
- Components can be composed together
- Props pass data down the component tree

### 2. useEffect Hook
Managing side effects (DOM manipulation, event listeners):
```javascript
useEffect(() => {
  // Setup code
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    // Cleanup code
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty array = run once on mount
```

### 3. Props
Passing data from parent to child components:
```javascript
<HeadingOne id="about" heading="About Me" />
```

### 4. JSX
JavaScript XML syntax that looks like HTML but:
- Uses `className` instead of `class`
- Uses `onClick` instead of `onclick`
- Inline styles use objects: `style={{display: 'none'}}`
- JavaScript expressions in curly braces: `{props.heading}`

## Why Convert to React?

### Benefits Gained:
1. **Component Reusability** - Cards and headings can be reused with different data
2. **Better Code Organization** - Each section is clearly separated
3. **Easier Maintenance** - Update one component, change all instances
4. **Props for Dynamic Content** - Easy to add CMS or fetch data from API later
5. **Modern Development** - Hot module reloading, better debugging tools
6. **Scalability** - Easy to add new sections or features
7. **State Management** - Can add interactivity (forms, toggles) more easily

### Trade-offs:
- Larger bundle size (React library overhead)
- Requires build step (Vite)
- More complex initial setup

## Running the Project

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Future Enhancements

Possible improvements now that it's in React:
- Add state management for form validation
- Create a data file for discography content
- Add loading states for embedded content
- Implement React Router for multi-page navigation
- Add animations with Framer Motion
- Convert to TypeScript for type safety
- Add unit tests with Vitest

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling (original CSS preserved)
- **FormSubmit.co** - Form backend
- **Spotify Embeds** - Music player integration
- **Font Awesome** - Icons

## Credits

Original website design and development: Aaron Richards  
React conversion: Aaron Richards  
Music: Ben Verdes

---

*This README documents the learning process of converting a static website to a React application, preserving functionality while applying modern component-based architecture.*
