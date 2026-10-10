# Smart Health Assistant — Implementation Plan

## Product approach

Build a single-page, static web application using semantic HTML5, CSS3, and vanilla JavaScript. All user-entered medicines, appointments, saved resources, and local demo profile settings remain in `localStorage`; no backend, account system, medical device connection, diagnosis, prescription, or paid API is introduced. Google Maps search links are generated only from user-provided search text or an explicitly permission-granted browser location.

The app uses a lightweight view router driven by `data-view` navigation rather than a framework. Each feature is a self-contained section in `index.html`, with rendering and event delegation in `script.js`. The dashboard reads the same state as the management sections so counts, calendar indicators, upcoming lists, and saved-resource totals stay truthful.

## Design direction

- **Design movement:** Quiet Clinical Glass — a restrained, premium healthcare dashboard that combines dark medical-console clarity with soft glass surfaces and an editorial rhythm.
- **Core principles:** (1) calm hierarchy over alarm, (2) useful density without clutter, (3) honest data states, (4) action-first accessibility.
- **Color philosophy:** Deep navy creates focus and trust; electric blue is reserved for primary navigation and actions; a mint-teal signal is used for progress, wellbeing, and safe confirmations; amber and controlled red are used only for attention and emergency context.
- **Layout paradigm:** A persistent left rail anchors the experience while the content canvas uses asymmetric dashboard bands: a wide activity lane, a narrow calendar lane, and stacked utility cards. On mobile this becomes a single-column “daily brief” with a slide-in navigation rail.
- **Signature elements:** a rounded “pulse” brand mark, thin luminous divider lines, and translucent cards with a soft blue inner glow.
- **Interaction philosophy:** Every action gives immediate feedback through a toast or inline state. Forms are progressively revealed, confirmations are explicit, and no high-impact action is hidden behind a decorative control.
- **Animation:** 180–240ms ease-out transitions for hover, view changes, card lift, toast entry, and the mobile drawer. No looping motion or distracting neon effects.
- **Typography system:** `Manrope` for display/headings and `Inter` for body/UI copy, loaded from Google Fonts with system fallbacks. Large headings are compact and editorial; body copy stays at a comfortable 14–16px with generous line-height.
- **Brand essence:** “A calm command center for the everyday work of looking after yourself.” Personality: precise, reassuring, human.
- **Brand voice:** Headlines are confident and concise; CTAs are clear and active; microcopy explains limitations without sounding clinical. Example lines: “Your health, organized in one place.” and “Keep the next step visible.”
- **Wordmark & logo:** “pulse / desk” wordmark with a custom double-line pulse mark built from CSS/inline SVG, plus a small `LOCAL DEMO` status pill to make the storage boundary visible.
- **Signature brand color:** `#63E6D8` — a cool mint signal used for wellbeing, saved states, and the brand pulse mark.

## Project structure

```text
healthdash/
├── index.html              # App shell, navigation, feature views, modals, semantic forms
├── style.css               # Tokens, responsive layout, glass cards, states, and accessibility styling
├── script.js               # Local state, rendering, interactions, calendar, maps links, and validation
├── manus-routes.json       # Static route manifest required by Webdev
├── app.config.ts           # Project logo metadata
├── package.json             # Minimal local run scripts, no runtime dependency
├── plan.md                 # This implementation and design plan
├── TODO.md                 # Deliverable acceptance outcomes
└── README.md                # Local run, deployment, feature, demo, and limitation notes
```

## Implementation and serving

1. Use a static Python HTTP server on `0.0.0.0:3000` for Preview and local development.
2. Use CDN-hosted Lucide UMD and Google Fonts as optional presentation dependencies; the application still renders its labels and controls without them.
3. Use an inline SVG activity chart instead of a chart package so the demo has no build/install step.
4. Keep `manus-routes.json` synchronized with the single `/` page route.
5. Use a modal confirmation for deletion and clear-local-data actions, plus toast feedback for successful saves, edits, completions, map-link generation, demo logout, and validation errors.
6. Ensure phone links and map links are explicit user-triggered anchors; location is requested only after the user clicks “Use my location.”
7. Validate required fields, prevent past appointment dates only when creating/updating a new appointment, and show past appointments separately rather than hiding them.
8. Before handoff, run static checks, start the Preview server, verify the route manifest and HTML response, inspect project diagnostics, and perform a focused read-only review against the feature requirements.
