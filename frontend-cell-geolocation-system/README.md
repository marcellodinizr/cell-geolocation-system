# Cell Geolocation System Frontend

A React + TypeScript web application for visualizing, creating, and managing "células" (cells/groups) on an interactive map. Built with Vite for fast development and leveraging Leaflet/Mapbox for map rendering.

## Features

- **Landing Page:** Welcome screen with project branding and quick access to the map.
- **Interactive Map:** View all registered células on a map, each represented by a marker.
- **Cell Details:** Click a marker to view detailed information, images, and contact options for a célula.
- **Create Célula:** Add new células by selecting a location on the map and filling out a form (name, nucleus, network, schedule, images).
- **API Integration:** All data is fetched and submitted via a REST API (default: `http://localhost:3333`).

## Tech Stack

- **React** (UI)
- **TypeScript** (type safety)
- **Vite** (build tool)
- **Leaflet + Mapbox** (map rendering)
- **React Router** (routing)
- **Axios** (API requests)
- **React-Leaflet** (React bindings for Leaflet)
- **CSS** (styling)

## Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **Yarn** or **npm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cell-geolocation-system.git
   cd cell-geolocation-system/frontend-cell-geolocation-system
   ```

2. **Install dependencies:**
   ```bash
   yarn
   # or
   npm install
   ```

3. **Environment Variables:**

   The map uses Mapbox tiles. You need a Mapbox access token.

   - Create a `.env` file in the project root:
     ```
     VITE_APP_MAPBOX_TOKEN=your_mapbox_access_token
     ```

4. **Start the development server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build for Production

```bash
yarn build
# or
npm run build
```

### Preview Production Build

```bash
yarn preview
# or
npm run preview
```

## Project Structure

```
src/
  components/      # Reusable UI components (Map, Sidebar, PrimaryButton, etc.)
  pages/           # Main pages (Landing, CelulasMap, Celula, CreateCelula)
  services/        # API service (axios instance)
  utils/           # Utilities (map icons, select options)
  styles/          # Global styles
  images/          # Static images and icons
  routes.tsx       # App routing
  App.tsx          # App entry point
  main.tsx         # React root
```

## Main Pages & Features

- **Landing (`/`)**: Welcome page with project logo and entry button.
- **Map (`/app`)**: Interactive map showing all células. Click a marker for details.
- **Create Célula (`/celulas/create`)**: Form to add a new célula. Select location on map, fill in details, upload images.
- **Célula Details (`/celulas/:id`)**: View details, images, schedule, and contact info for a célula.

## Creating a Célula

When adding a célula, you will provide:

- **Name**
- **Nucleus** (e.g., Igreja da Aliança Olho D'agua)
- **Network** (e.g., Adultos, Jovens, Adolescentes, Crianças)
- **Location** (select on map)
- **Day of the week** (e.g., Terça-feira, Quinta-feira)
- **Time** (e.g., 19:00h)
- **Images** (optional)

## API

- The frontend expects a backend running at `http://localhost:3333` (configurable in `src/services/api.ts`).
- Endpoints used:
  - `GET /celulas` — List all células
  - `GET /celulas/:id` — Get details for a célula
  - `POST /celulas` — Create a new célula

## Map Provider

- Uses **Mapbox** tiles via Leaflet.
- Requires a Mapbox access token (`VITE_APP_MAPBOX_TOKEN` in `.env`).

## Customization

- **Option Data:** Nucleus, network, weekday, and time options are defined in `src/utils/options/data.ts`.
- **Styling:** Customize styles in the respective CSS files in each component/page folder.

## Scripts

- `yarn dev` — Start development server
- `yarn build` — Build for production
- `yarn preview` — Preview production build
- `yarn lint` — Run ESLint

## License

[MIT](LICENSE) (or specify your license)

---

**Note:**  
This README is tailored to your current codebase. Update the API URL, Mapbox token, and other project-specific details as needed.
