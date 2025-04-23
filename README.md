Book Directory MERN App
A MERN stack app to manage books with CRUD operations (view, add, update, delete).
Features

View books (title, author, category, published year)
Add new book
Update book details
Delete book

Structure
Book/
├── backend/
│   ├── models/Book.js
│   ├── routes/books.js
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookList.jsx
│   │   │   ├── BookForm.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env

Prerequisites

Node.js (v16+)
MongoDB (Atlas or local)
Git
Render.com account (for deployment)

Setup
1. Clone Repo
git clone <your-repo-url>
cd Book

2. Backend
cd backend
npm install

Create backend/.env:
MONGODB_URI=your_mongodb_uri
PORT=5000

Run:
npm run dev

3. Frontend
cd ../frontend
npm install

Create frontend/.env:
VITE_API_URL=http://localhost:5000

Run:
npm run dev

4. Test

Frontend: http://localhost:5173
Backend API: GET http://localhost:5000/api/books

Deploy on Render.com
Backend

Push to GitHub.
Create Web Service on Render:
Select backend directory.
Environment: Node
Build: npm install
Start: npm start
Env vars: MONGODB_URI, PORT


Update CORS in backend/index.js:app.use(cors({ origin: 'https://book-frontend.onrender.com' }));



Frontend

Update VITE_API_URL in frontend/.env:VITE_API_URL=https://book-backend.onrender.com


Create Static Site on Render:
Select frontend directory.
Build: npm install && npm run build
Publish: dist


Access at Render URL.

Troubleshooting

Module Not Found: Run npm install or rm -rf node_modules package-lock.json && npm install.
MongoDB Error: Check MONGODB_URI and Atlas IP whitelist.
CORS: Verify CORS config in backend/index.js.

Tech Stack

Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React, Vite, Tailwind CSS, Axios
Deployment: Render.com

License
MIT
