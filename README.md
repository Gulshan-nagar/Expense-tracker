Expense Tracker

Introduction

The Expense Tracker is a full-stack web application designed to help users efficiently track their expenses and manage their finances. It allows users to add, edit, and delete expenses while categorizing them for better financial insights. The application provides a user-friendly interface and real-time updates to ensure smooth expense management.

Project Type

Fullstack (Frontend + Backend)

Deployed App

Frontend: https://your-frontend-url.com

Backend: https://your-backend-url.com

Database: https://your-database-url.com

Directory Structure

expense-tracker/
├─ backend/
│  ├─ models/
│  ├─ routes/
│  ├─ controllers/
│  ├─ server.js
├─ frontend/
│  ├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ App.js
│  ├─ index.js

Video Walkthrough of the Project

[Attach a short video walkthrough of all features (1-3 minutes)]

Video Walkthrough of the Codebase

[Attach a short video walkthrough of the codebase (1-5 minutes)]

Features

User authentication (Signup/Login)

Add, edit, and delete expenses

Categorize expenses (Food, Travel, Bills, etc.)

Real-time expense tracking and filtering

Monthly and yearly expense summary

Responsive UI for all devices

Design Decisions & Assumptions

The app stores expenses in MongoDB.

Authentication is implemented using JWT.

React.js is used for the frontend, ensuring a smooth and interactive experience.

Node.js & Express.js handle the backend API requests.

Data validation and security measures are implemented.

Installation & Getting Started

Follow these steps to install and run the application:

Backend Setup

cd backend
npm install
npm start

Frontend Setup

cd frontend
npm install
npm start

Usage

After starting both frontend and backend servers, open the application in your browser and register or log in to start tracking expenses.

Example API Usage

Get all expenses

GET /api/expenses

Response:

[
  {
    "id": 1,
    "category": "Food",
    "amount": 100,
    "date": "2024-03-22"
  }
]

Credentials

Use the following test credentials for authentication:

Email: test@example.com
Password: password123

APIs Used

MongoDB Atlas for database storage

JWT Authentication for secure login

API Endpoints

Method

Endpoint

Description

POST

/api/users/login

User login

POST

/api/users/register

User registration

GET

/api/expenses

Get all expenses

POST

/api/expenses

Add a new expense

PUT

/api/expenses/:id

Update an expense

DELETE

/api/expenses/:id

Delete an expense

Technology Stack

Frontend: React.js, Bootstrap, Axios

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Styling: CSS, Material UI
