
# Fullstack Subscription Management App

This repository contains a **frontend** built with **Next.js** and a **backend** built with **Node.js (Express.js)**. It has used Typescript, React Query, Tailwind, JSON Database, proper error handling, reusable components.

---

## 🗂 Folder Structure

```
/project-root
  ├── /frontend         # Next.js frontend application
  └── /backend          # Node.js backend with MVC architecture
```

---

## 🚀 Getting Started

### 🛠 Backend Setup (`/backend`)

#### Prerequisites:
- Node.js installed
- Create a `.env` file with the following content:

```env
NODE_ENV="development"
PORT=4000
```

#### Steps to Start:

```bash
cd backend
npm install
npm run build
npm run start:dev
```

Backend will run on `http://localhost:4000`.

> **Note:** If you change the frontend port from 3000, make sure to update the CORS whitelist in:
>
> `backend/src/app.tsx` → **Line 8**

---

### 💻 Frontend Setup (`/frontend`)

#### Steps to Start:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000/plans`.

---

## 📌 Key Features

### 🔐 Backend

---
  - `routes/` for routing
  - `controllers/` for business logic
  - `core/` for centralized error handling
  - `utils/` for helper functions
- **CORS Configuration** (origin control via whitelist)
- **Static File Serving**:
  - `uploads/` folder serves static assets and contains a `.json` file acting as backend data for the subscription plans.

---

### 🧩 Frontend

- Built with **Next.js App Router**
- All code is in `app/` directory:
  - `app/subscriptions/` for subscription-related pages
  - `app/subscriptions/plans/` for reusable plan components
  - Global reusable components are directly in `app/components`
  - Static assets (images, and icons.) also reside in `app/assets`
- **React Query** is used for data fetching and API state management
- Upgrade modal is available at route: `/plans`

---

## 📷 Static Assets & Plan Data

- Images and JSON files are hosted in `backend/uploads/`
- The JSON file acts as a mock database for plans data consumed by the frontend.

---

## 📝 Notes

- Make sure to align ports between frontend and backend.
- CORS changes must be reflected in `backend/sec/app.tsx` at **line 8**.

---

Thank you!
-Saurav Gami
