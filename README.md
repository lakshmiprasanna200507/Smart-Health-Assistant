# Smart Health Assistant

A polished, local-first healthcare organizer dashboard built with HTML5, CSS3, and vanilla JavaScript. It is designed for a college hackathon demonstration and intentionally does **not** diagnose conditions, prescribe medicines, connect to medical devices, book real clinic appointments, or replace professional advice.

## Run locally

The project has no build step or paid dependency. From this folder:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Then open `http://localhost:3000`. The managed Preview uses the same port. The included `package.json` also exposes `npm run dev` and `npm start` aliases for teams that prefer a script command.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Accessible app shell, sidebar, header, dashboard, feature sections, forms, and modal markup |
| `style.css` | Dark navy glass dashboard system, responsive layouts, states, themes, and focus styling |
| `script.js` | localStorage state, rendering, form validation, calendar, resource library, map links, and toasts |
| `manus-routes.json` | Required root static route manifest for the `/` page |
| `app.config.ts` | Project logo metadata |
| `plan.md` | Implementation and design decisions |
| `TODO.md` | Acceptance outcomes copied from the product brief |

## Features

- Truthful dashboard counts for medicines, appointments, completed reminders, and saved resources.
- Medicine reminders with user-entered instructions, frequency, notes, edit/delete confirmation, completion state, empty states, and browser-local persistence.
- Appointment records with doctor, clinic, date, time, purpose, notes, upcoming/past/all filters, search, sorting, calendar markers, edit/delete confirmation, and local persistence.
- General education library with search, category filtering, expandable article views, saved resources, visible disclaimer, and links to official WHO pages.
- Nearby care finder that generates Google Maps searches from user-entered location or explicitly permission-granted browser coordinates. It does not fabricate hospital results.
- Emergency quick access with configurable India-focused demo copy showing 112, explicit telephone/map actions, and clear limits around automation and dispatch.
- Local demo profile, theme toggle, privacy explanation, notification limitation copy, and confirmed clear-local-data action.

## External services and API keys

No private API key is required for the initial version. The UI uses public Google Maps search links and a public Lucide CDN/Google Fonts link. A future live places directory would require a server-side or managed maps/places provider and must keep private keys out of frontend code.

## Free deployment options

Because this is a static site, it can be deployed free of charge to GitHub Pages, Netlify, Cloudflare Pages, or Vercel. Upload the project as a static repository and set the publish directory to the project root. For GitHub Pages, enable Pages from the repository’s `main` branch and keep `index.html` at the root.

## Hackathon demo flow

1. Start on Dashboard and point out the local-demo badge, truthful zero states, illustrative activity chart, calendar, and privacy card.
2. Add a medicine reminder with user-entered instructions, mark it complete, and return to Dashboard to show the count update.
3. Add an appointment, use the calendar date indicator and upcoming card, then demonstrate search/edit/delete confirmation.
4. Open Health information, filter to Sleep or Nutrition, read an article, save it, and show the saved-resource count.
5. Open Nearby hospitals, search a real demo location, and show that the app opens a map search instead of inventing a directory result.
6. Finish with Emergency quick access and Profile & settings to explain limitations, localStorage, and the clear-data confirmation.

## Known limitations and future improvements

- Records are browser-local and are not encrypted medical storage; clearing browser data or changing devices may remove them.
- There is no authentication, cloud sync, background reminder engine, backend, provider directory, or live maps API.
- A future version could add an opt-in managed database, user authentication, a vetted places provider, export/import with encryption, and a tested service-worker notification flow.
- The sample chart is explicitly illustrative activity data and must not be interpreted as a patient measurement.

## Export and backend status

This export is complete for the current application. It contains all source, configuration, documentation, and dependency metadata tracked by the project. The application is intentionally frontend-only: there is no backend server, API route, database, authentication service, or server-side code to include. All demo records use browser `localStorage`.

### Windows setup

```powershell
cd path\\to\\Smart-Health-Assistant-source
py -m http.server 3000
```

Open `http://localhost:3000` in a browser. If Node.js is installed, the package scripts also work with `npm run dev` or `npm start`.

### GitHub upload

Create a repository, copy these files into it, then run:

```bash
git init
git add .
git commit -m "Initial Smart Health Assistant source"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
