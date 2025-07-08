# Cell Geolocation System Backend

A Node.js/TypeScript REST API for managing geolocated cells ("celulas") and their associated images. Built with Express, TypeORM, SQLite, and Multer.

---

## Features
- Register new cells with geolocation and metadata
- Upload and associate images with each cell
- Retrieve all cells or a specific cell, including image URLs
- Data validation and error handling

---

## Tech Stack
- **Node.js** + **Express**
- **TypeScript**
- **TypeORM** (with SQLite)
- **Multer** (file uploads)
- **Yup** (validation)

---

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- Yarn or npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd backend-cell-geolocation-system
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Run database migrations:
   ```bash
   yarn typeorm migration:run
   # or
   npm run typeorm migration:run
   ```
4. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

The server will start on [http://localhost:3333](http://localhost:3333).

---

## API Endpoints

### List all cells
- **GET** `/celulas`
- **Response:** Array of cells with metadata and image URLs

### Get a specific cell
- **GET** `/celulas/:id`
- **Response:** Cell object with metadata and image URLs

### Create a new cell
- **POST** `/celulas`
- **Content-Type:** `multipart/form-data`
- **Body:**
  - `name` (string, required)
  - `latitude` (number, required)
  - `longitude` (number, required)
  - `nucleus` (string, required)
  - `network` (string, required)
  - `week_day` (string, required)
  - `time_of_day` (string, required)
  - `images` (array of image files, optional)
- **Response:** Created cell object with image URLs

#### Example cURL
```bash
curl -X POST http://localhost:3333/celulas \
  -F "name=Cell A" \
  -F "latitude=-23.5505" \
  -F "longitude=-46.6333" \
  -F "nucleus=Central" \
  -F "network=Alpha" \
  -F "week_day=Monday" \
  -F "time_of_day=Evening" \
  -F "images=@/path/to/image1.jpg" \
  -F "images=@/path/to/image2.jpg"
```

---

## File Uploads
- Uploaded images are stored in the `/uploads` directory.
- Image URLs are returned in API responses as `http://localhost:3333/uploads/<filename>`.

---

## Error Handling
- Validation errors return HTTP 400 with details.
- Internal server errors return HTTP 500.

---

## Project Structure
```
backend-cell-geolocation-system/
├── src/
│   ├── config/         # Multer upload config
│   ├── controllers/    # Express controllers
│   ├── database/       # TypeORM connection, migrations, SQLite DB
│   ├── errors/         # Error handler
│   ├── models/         # TypeORM entities
│   ├── views/          # Response formatting
│   ├── routes.ts       # API routes
│   └── server.ts       # App entry point
├── uploads/            # Uploaded images
├── ormconfig.json      # TypeORM config
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript config
```

---

## License
MIT 