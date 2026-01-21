# EduraZ Landing Page - Project Reference

## Project Overview
A production-ready marketing landing page for EduraZ, a FREE MVP learning roadmap generator app. Built with pure HTML, CSS, and vanilla JavaScript (no frameworks).

## Project Goals
- Fast load time (no external dependencies)
- Premium minimal Apple/Cursor-style UI matching the existing EduraZ Roadmap app design
- Clearly communicate that the app is FREE (MVP)
- Match the exact design aesthetic from the app screenshot

## Design System

### Color Palette (Black & White Only)
```css
--bg: #ffffff;
--card: #ffffff;
--text: #0b0f14;            /* near black */
--muted: #6b7280;           /* soft gray */
--muted2: #9aa3af;          /* lighter helper text */
--border: rgba(15, 23, 42, 0.12);
--shadow: 0 10px 30px rgba(2, 6, 23, 0.06);
--shadow2: 0 6px 18px rgba(2, 6, 23, 0.08);
--radius: 18px;
--radius2: 24px;
--focus: rgba(17, 24, 39, 0.18);
```

### Typography
- Font Stack: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`
- Headline: Bold, large, tight leading
- Body: Calm, readable, slightly muted

### Design Principles
- White background
- Near-black text
- Soft gray secondary text
- Thin light borders
- Rounded cards (18px and 24px radius)
- Subtle shadows
- Minimal icons
- Lots of whitespace

## File Structure
```
HTML-css/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles
├── js/
│   └── main.js        # JavaScript functionality
└── PROJECT_REFERENCE.md # This file
```

## Page Sections

### 1. Sticky Navigation
- Left: "EduraZ" wordmark text
- Right: "Try the free app" button (links to https://eduraz.com/)
- Sticky positioning with subtle backdrop blur
- No theme toggle (removed per requirements)

### 2. Hero Section
- **Headline**: "Get a personalized roadmap in 30 seconds."
- **Subheadline**: "Stop wasting time searching. EduraZ turns your goal into a clear plan, weekly milestones, and daily tasks."
- **Free badge**: "Free to use • No payment • MVP"
- **CTAs**: 
  - Primary: "Try the free app" → https://eduraz.com/
  - Secondary: "See examples" → scrolls to examples
- **Note**: "Built for self-learners: coding, school, career skills."

### 3. Phone Preview Section
- Centered phone mockup displaying the EduraZ website
- Phone frame with notch and home indicator
- Iframe loads: https://eduraz.com/
- Fixed height: 700px (desktop), 500px (mobile)
- Black phone frame with rounded corners

### 4. Examples Section
- 3 example cards:
  1. Learn HTML & CSS in 30 days
  2. Learn Python for quant investing in 90 days
  3. Neuroscience fundamentals + study habits
- Each card has title, bullet points, and "Load this example" button
- Clicking scrolls to phone preview section

### 5. How It Works Section
- 3-step process:
  1. Describe your goal
  2. Pick your schedule
  3. Get milestones + daily tasks
- Minimal inline SVG icons
- Responsive grid layout

### 6. Why EduraZ Section
- 4 benefit cards:
  - Clear weekly milestones
  - Daily action plan
  - Stop info overload
  - Built for momentum

### 7. About Section
- Explains EduraZ's mission and purpose
- 3 paragraphs about the product
- Centered, max-width content

### 8. Features Section
- 6 feature cards:
  - AI-Powered Roadmaps
  - Weekly Milestones
  - Daily Tasks
  - Flexible Scheduling
  - Multiple Learning Styles
  - 100% Free

### 9. Social Proof Section
- 3 testimonial cards with quotes
- Placeholder testimonials

### 10. FAQ Section
- 4 common questions:
  - Is EduraZ really free?
  - How does it work?
  - What can I learn with EduraZ?
  - How long does it take to get a roadmap?

### 11. Footer
- Links: Try the free app, Privacy, Contact
- Copyright notice

## Key Features Implemented

### Interactions
- Smooth scroll for internal links
- Hover states on buttons (lift effect)
- Hover states on cards (shadow increase)
- Focus states for accessibility
- Responsive design (mobile-first)

### Performance
- No external dependencies
- No font files (system fonts only)
- No heavy libraries
- No images (SVG icons only)
- Instant page load

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Focus states visible
- Keyboard navigation support

## JavaScript Functionality

### `loadExample(button)`
- Scrolls to phone preview section when example card is clicked
- Smooth scroll behavior

### Smooth Scroll Handler
- Handles all anchor links with smooth scrolling
- Prevents default behavior and scrolls to target

## CSS Features

### Responsive Breakpoints
- Mobile: max-width 768px
- Desktop: 1200px max-width container

### Key CSS Patterns
- CSS Custom Properties (variables)
- Flexbox and Grid layouts
- Smooth transitions
- Backdrop filter for nav blur
- Card hover effects

## Important Notes

### Removed Features
- ❌ Theme toggle (dark/light mode) - removed per requirements
- ❌ Interactive preview form - replaced with phone mockup
- ❌ Preview generator JavaScript - no longer needed

### Current State
- ✅ Black and white only design
- ✅ Phone mockup showing eduraz.com
- ✅ All typical landing page sections included
- ✅ Fully responsive
- ✅ Fast loading (no external resources)

## Links
- **App URL**: https://eduraz.com/
- **Primary CTA**: All "Try the free app" buttons link to https://eduraz.com/

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard CSS features (no polyfills needed)
- Progressive enhancement approach

## Future Considerations
- If phone mockup iframe doesn't load (X-Frame-Options), consider:
  - Screenshot image fallback
  - Different embedding approach
  - Direct link to app instead

## Development Notes
- All files are standalone (no build step required)
- Open `index.html` directly in browser to view
- No package.json or dependencies
- Pure vanilla JavaScript (ES6+)

---

**Last Updated**: Initial project creation
**Status**: Production-ready MVP landing page
