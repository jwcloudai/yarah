# Responsive Design Guidelines

## Breakpoint Strategy

### Mobile (< 768px)
- **Layout**: Single column layout
- **Navigation**: Collapses to hamburger menu
- **Carousels**: Swipeable, single slide view
- **Typography**: Smaller font sizes
- **Spacing**: Reduced padding and margins
- **Images**: Full width, stacked vertically

### Tablet (768px – 1023px) 
- **Layout**: Two column grids
- **Navigation**: Abbreviated nav in header
- **Carousels**: Show 2 slides at a time
- **Typography**: Medium font sizes
- **Spacing**: Moderate padding
- **Images**: Side-by-side in pairs

### Desktop (≥ 1024px)
- **Layout**: Full multi-column layout
- **Navigation**: Fully expanded navigation
- **Max Width**: Content constrained to 780px–1200px, centered
- **Carousels**: Multiple slides visible
- **Typography**: Full-size headings and text
- **Spacing**: Full padding and margins

## Tailwind Breakpoint Classes

```
sm:  640px  (Mobile landscape / Small tablets)
md:  768px  (Tablets)
lg:  1024px (Desktop)
xl:  1280px (Large desktop)
2xl: 1536px (Extra large desktop)
```

## Implementation Pattern

For our design system:
- **Mobile-first approach**: Base styles apply to mobile
- **`md:`**: Tablet breakpoint (768px+)
- **`lg:`**: Desktop breakpoint (1024px+)

Example:
```tsx
// Mobile: single column, tablet: 2 cols, desktop: 3 cols
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

## Component-Specific Guidelines

### HeroSlider
- Mobile: Single slide, full height, text overlay at bottom
- Tablet: Single slide, improved spacing
- Desktop: Single slide with diagonal image treatment

### SiteNav
- Mobile: Hamburger menu, compact logo
- Tablet: Hamburger menu, medium logo, utility items visible
- Desktop: Full navigation links, all utility items

### Content Sections
- Mobile: Full width, stacked content
- Tablet: `max-w-5xl` (1024px), two-column where appropriate
- Desktop: `max-w-7xl` (1280px), multi-column layouts

## Touch & Interaction
- Mobile/Tablet: Touch-optimized hit areas (min 44x44px)
- Desktop: Hover states, keyboard navigation
- All: Smooth transitions, accessibility focus states
