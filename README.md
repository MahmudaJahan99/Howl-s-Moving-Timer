# ⏱️ Howl's Moving Timer

A magical Ghibli-themed kitchen timer built with React 19, combining the enchantment of Howl's Moving Castle with practical utility.

## ✨ Project Overview

**Howl's Moving Timer** is a learning project designed to master modern React 19 concepts while building a beautiful, functional kitchen timer application. The app guides users through a series of common kitchen tasks, lets them select specific subtasks with predefined durations, and features smooth animations, sound effects, and completion celebrations.

### Key Features (Planned)

- 🎨 **Ghibli-Inspired Design** - Warm, magical color palette and smooth animations
- 🔄 **Task Selection Flow** - Home → Task → Subtask → Timer
- ⏱️ **Customizable Timer** - Set your own time or use suggested durations
- 🔔 **Sound & Animation** - Completion animations and audio notifications
- 🌙 **Dark Mode Support** - Automatic theme detection and manual toggle
- ♿ **Accessible** - Full keyboard navigation and screen reader support
- 📱 **Responsive Design** - Works beautifully on mobile and desktop
- 🚀 **React 19 Concepts** - useTransition, useOptimistic, Form actions, and more

## 🎯 React 19 Learning Goals

This project specifically teaches:

1. **useTransition** - Smooth page transitions without UI blocking
2. **useOptimistic** - Optimistic UI updates while fetching
3. **Form Actions** - Server-like form patterns in React
4. **Custom Hooks** - Build `useTimer`, `useSound`, `useLocalStorage`
5. **Context API** - Share timer state across components
6. **useEffect + Cleanup** - Manage intervals and cleanup properly
7. **Error Boundaries** - Handle errors gracefully
8. **Component Composition** - Build reusable, well-organized components

## 📁 Project Structure

```
howls-moving-timer/
├── public/                      # Static assets
│   └── assets/
│       ├── sounds/             # Audio files
│       ├── images/             # Images
│       └── icons/              # Icon files
├── src/
│   ├── assets/styles/
│   │   ├── variables.css       # CSS custom properties (colors, spacing, etc.)
│   │   ├── globals.css         # Base styles, resets, utility classes
│   │   └── animations.css      # Keyframe animations
│   ├── components/
│   │   ├── common/             # Shared components (Button, Card, Header)
│   │   ├── TaskList/           # Task selection components
│   │   ├── Timer/              # Timer display and controls
│   │   ├── SubtaskSelector/    # Subtask selection UI
│   │   └── Animations/         # Animation components (Confetti, etc.)
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTimer.js
│   │   ├── useSound.js
│   │   ├── useLocalStorage.js
│   │   └── usePageTransition.js
│   ├── pages/                  # Page components (route-level)
│   │   ├── Home.jsx
│   │   ├── TaskSelect.jsx
│   │   ├── SubtaskSelect.jsx
│   │   ├── TimerPage.jsx
│   │   └── Completion.jsx
│   ├── contexts/               # React Context setup
│   │   ├── TimerContext.jsx
│   │   └── ThemeContext.jsx
│   ├── utils/                  # Utility functions
│   │   └── constants.js
│   ├── data/                   # Static data
│   │   └── tasks.js           # Kitchen tasks database
│   ├── App.jsx                 # Main app component with routing
│   └── main.jsx                # React entry point
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

## 🎨 Design System

### Color Palette

The design draws inspiration from **Howl's Moving Castle** (2004):

| Color | Hex | Usage |
|-------|-----|-------|
| **Forest Green** | `#2d5f4f` | Primary accent, nature magic |
| **Rust** | `#c97c5c` | Secondary accent, warmth |
| **Deep Purple** | `#5c4b66` | Mystique, Howl's magic |
| **Soft Gold** | `#d4a574` | Elegance, time, precision |
| **Ghibli Blue** | `#6b9fb0` | Calm, sky, dreams |
| **Soft Cream** | `#f5f1e8` | Primary background |
| **Charcoal** | `#2c2420` | Primary text |

### Typography

- **Sans Serif (UI)**: Poppins (warm, rounded, friendly)
- **Serif (Headings)**: DM Serif Display (elegant, dramatic)
- **Monospace**: JetBrains Mono (code, precise measurements)

### Design Tokens

All CSS custom properties are defined in `/src/assets/styles/variables.css`:

```css
--color-primary: #2d5f4f;
--font-size-base: 1rem;
--space-4: 1rem;
--radius-lg: 0.875rem;
--shadow-md: 0 4px 6px var(--color-shadow-dark);
--transition-base: 250ms;
--easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn/pnpm

### Installation

```bash
# Clone or navigate to project
cd howls-moving-timer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:5173`

## 📚 Dependencies

### Core
- **React 19** - UI library
- **React Router v6** - Client-side routing
- **Framer Motion** - Smooth animations
- **Zustand** - Lightweight state management (optional)
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling

### Development
- **@vitejs/plugin-react** - React support for Vite
- **Autoprefixer** - CSS vendor prefixes
- **PostCSS** - CSS processing

## 🎬 Development Workflow

### Common Commands

```bash
# Start dev server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

### Naming Conventions

- **Components**: PascalCase (`TimerDisplay.jsx`)
- **Hooks**: camelCase with `use` prefix (`useTimer.js`)
- **Utilities**: camelCase (`formatTime()`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_TIME`)
- **CSS Classes**: kebab-case (`.timer-display`)

## 🔧 Configuration Files

### CSS Variables (`variables.css`)
- Colors, typography, spacing, shadows
- Breakpoints and z-index scale
- Light/dark mode variants
- Reduced motion support

### Global Styles (`globals.css`)
- HTML/body resets
- Typography base styles
- Form elements styling
- Utility classes
- Accessibility utilities

### Animations (`animations.css`)
- Keyframe animations
- Utility animation classes
- Stagger effects
- Reduced motion media queries

### Tailwind Config
- Extended color palette (matches CSS variables)
- Custom typography
- Animation extensions
- Responsive breakpoints

## 🎯 Project Phases

### Phase 1: Setup & Foundation ✅ (Current)
- [x] Project structure
- [x] Design system (colors, typography, spacing)
- [x] CSS variables and global styles
- [x] Tailwind configuration
- [ ] Basic components (Button, Card, Header)

### Phase 2: Core Features (Next)
- [ ] Task list UI and components
- [ ] Subtask selection flow
- [ ] Timer display and controls
- [ ] Timer logic and useTimer hook
- [ ] Sound management (useSound hook)
- [ ] Animations and transitions

### Phase 3: React 19 Advanced (Final)
- [ ] useTransition for page transitions
- [ ] useOptimistic for instant feedback
- [ ] Form actions for timer input
- [ ] Completion animations
- [ ] Notifications and alerts
- [ ] Polish and accessibility

## 🎨 Design Principles

1. **Warmth** - Colors and spacing feel inviting and comfortable
2. **Clarity** - UI is intuitive with clear visual hierarchy
3. **Smoothness** - Animations are subtle and purposeful
4. **Accessibility** - Works for all users, respects preferences
5. **Performance** - Smooth 60fps animations, quick interactions
6. **Responsiveness** - Scales beautifully from mobile to desktop

## 📖 Learning Resources

### React 19
- [React 19 Official Docs](https://react.dev)
- [useTransition Hook Guide](https://react.dev/reference/react/useTransition)
- [useOptimistic Hook Guide](https://react.dev/reference/react/useOptimistic)

### CSS & Design
- [MDN CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Accessibility
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Accessible Rich Internet Applications](https://www.w3.org/TR/wai-aria-1.2/)

## 🤝 Contributing & Learning

This is a learning project! Feel free to:
- Experiment with components
- Try different animation approaches
- Test React 19 features
- Customize the design system
- Add new kitchen tasks

## 📝 Notes for Future Development

### Sound Setup
- Ensure audio files are placed in `/public/assets/sounds/`
- Will create useSound hook for audio playback management
- Consider notification permissions for browser alerts

### Animation Performance
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating layout properties
- Test with reduced motion preference

### State Management
- Timer state will live in context or Zustand store
- Local state for UI interactions
- Custom hooks for complex logic

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 📄 License

MIT - Feel free to use this project for learning!

---

**Happy learning! May your timers be swift and your animations smooth. ✨**