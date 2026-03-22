# Movie Booking Backend (MBA)

A RESTful backend API for a movie booking application built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express v5
- **Database:** MongoDB via Mongoose
- **Security:** Helmet
- **Environment:** dotenv

## Project Structure

```
movie-booking-backend/
├── src/
│   ├── index.js            # Entry point
│   ├── server.js           # Server bootstrap
│   ├── app.js              # Express app setup
│   ├── config/
│   │   └── database.js     # MongoDB connection
│   ├── controllers/
│   │   ├── movie.controller.js
│   │   └── theatre.controller.js
│   ├── middlewares/
│   │   ├── movie.middleware.js
│   │   └── theatre.middlewares.js
│   ├── models/
│   │   ├── movie.model.js
│   │   └── theatre.model.js (if applicable)
│   ├── routes/
│   │   ├── movie.routes.js
│   │   └── theatre.routes.js
│   ├── services/
│   └── utils/
├── .env
├── .gitignore
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB running locally or a remote MongoDB URI

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
DB_NAME=mba_db
DB_URL=mongodb://localhost:27017/mba_db
```

### Running the Server

```bash
# Production
npm start

# Development (with file watching)
npm run dev
```

The server will start on `http://localhost:5000`.

## API Endpoints

Base URL: `/mba/api/v1`

### Movies

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | `/movies`         | Get all movies     |
| GET    | `/movies/:id`     | Get movie by ID    |
| POST   | `/movies`         | Create a new movie |
| PUT    | `/movies/:id`     | Update a movie     |
| DELETE | `/movies/:id`     | Delete a movie     |

### Theatres

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/theatre`         | Get all theatres     |
| GET    | `/theatre/:id`     | Get theatre by ID    |
| POST   | `/theatre`         | Create a new theatre |
| DELETE | `/theatre/:id`     | Delete a theatre     |

## Movie Schema

| Field           | Type     | Required | Default      |
|----------------|----------|----------|--------------|
| `name`          | String   | Yes      | —            |
| `description`   | String   | Yes      | —            |
| `casts`         | [String] | Yes      | —            |
| `trailerUrl`    | String   | No       | —            |
| `language`      | String   | Yes      | `"English"`  |
| `releasedDate`  | String   | Yes      | —            |
| `director`      | String   | Yes      | —            |
| `releasedStatus`| String   | Yes      | `"RELEASED"` |

## Author

**Shubham**

## License

ISC
