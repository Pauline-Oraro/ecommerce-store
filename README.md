# Ecommerce Store

A minimal e-commerce example with a Node/Express + Neon/Postgres backend and a React + Vite frontend (Tailwind + DaisyUI).

## Table of contents

- About
- Features
- Tech stack
- API
- Important files
- Contributing
- License

## About

Ecommerce Store is a compact, full-stack example project that demonstrates a practical modern web app: a Node/Express + Neon/Postgres backend serving a React + Vite frontend styled with Tailwind + DaisyUI. It implements core e-commerce functionality (product CRUD) with production-oriented touches such as Arcjet-based rate limiting/bot protection and simple database seeding.

## Features

- List, create, update and delete products
- Simple UI for adding/editing products
- Rate limiting & bot protection via Arcjet
- Persistent storage using Neon/Postgres

## Tech stack

- Backend: Node, Express, [@neondatabase/serverless](backend/config/db.js)
- Frontend: React, Vite, Tailwind, DaisyUI
- Rate limiting / bot detection: [Arcjet](backend/lib/arcjet.js)

## API

All endpoints are mounted under /api/products via [backend/routes/productRoutes.js](backend/routes/productRoutes.js).

- GET /api/products — list products — implementation: [`getProducts`](backend/controllers/productController.js)
- GET /api/products/:id — get single product — implementation: [`getProduct`](backend/controllers/productController.js)
- POST /api/products — create product — implementation: [`createProduct`](backend/controllers/productController.js)
- PUT /api/products/:id — update product — implementation: [`updateProduct`](backend/controllers/productController.js)
- DELETE /api/products/:id — delete product — implementation: [`deleteProduct`](backend/controllers/productController.js)

## Important files

- Server: [backend/server.js](backend/server.js)
- Routes: [backend/routes/productRoutes.js](backend/routes/productRoutes.js)
- Controllers: [backend/controllers/productController.js](backend/controllers/productController.js)
- DB config: [backend/config/db.js](backend/config/db.js)
- Arcjet config: [backend/lib/arcjet.js](backend/lib/arcjet.js)
- Frontend entry: [frontend/src/main.jsx](frontend/src/main.jsx)
- Frontend stores: [frontend/src/store/useProductStore.js](frontend/src/store/useProductStore.js), [frontend/src/store/useThemeStore.js](frontend/src/store/useThemeStore.js)
- Theme constants: [frontend/src/constants/index.js](frontend/src/constants/index.js)
