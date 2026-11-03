# Simple Express API

A small Express server with JSON endpoints for home, about, and contact.

## Project structure

- `server.js` — Creates and starts the Express server
- `routes/pageRoutes.js` — Maps URLs to controller functions
- `controllers/pageController.js` — Contains the endpoint handlers

## Run

```sh
npm install
npm start
```

The server listens on port `3000` by default. Set the `PORT` environment
variable to use a different port.

## Endpoints

- `GET /` — Home response and endpoint list
- `GET /api/home` — Home response
- `GET /api/about` — About response
- `GET /api/contact` — Contact response
