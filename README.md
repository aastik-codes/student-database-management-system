# Student Database Management System

A RESTful Student Management System built using **Node.js** and **Express.js**. This project was developed as a backend-focused learning project to understand API development, routing, controllers, CRUD operations, file-based data persistence, and client-server communication.

---

## Overview

The application allows users to manage student records through a simple web interface and a backend API.

Each student record contains:

- Student ID
- Student Name
- Course

The backend handles all business logic, validation, CRUD operations, and persistence using a JSON file.

---

## Features

### Create Student
- Add a new student
- Automatically generates a unique ID
- Validates required fields

### Read Student
- Retrieve all students
- Retrieve a specific student using ID

### Update Student
- Update student name
- Update student course
- Prevent modification of student ID

### Delete Student
- Delete a student record by ID

### Health Check
- Verify server status

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- HTML
- CSS
- JavaScript

### Data Storage
- JSON File Storage (`students.json`)

---

## Project Structure

```text
student-management-system
│
├── controllers
│   └── controllers.js
│
├── routes
│   └── routes.js
│
├── utils
│   ├── filehandler.js
│   └── idgen.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── students.json
├── server.js
├── package.json
└── package-lock.json
```

---

## Backend Architecture

### server.js

Responsible for:

- Express app initialization
- Middleware registration
- Static file serving
- Route mounting
- Starting the server

### routes.js

Defines API endpoints and forwards requests to controller functions.

```http
GET     /students
GET     /students/:id
POST    /students
PUT     /students/:id
DELETE  /students/:id
```

### controllers.js

Contains all business logic.

Responsibilities:

- Reading student data
- Creating records
- Updating records
- Deleting records
- Returning appropriate status codes
- Handling validation

### filehandler.js

Acts as a lightweight data layer.

Functions:

- ReadData()
- WriteData()

Used to interact with the JSON database.

### idgen.js

Generates unique IDs for newly created student records.

---

## API Endpoints

### Get All Students

```http
GET /students
```

### Get Student By ID

```http
GET /students/:id
```

### Create Student

```http
POST /students
```

Request Body:

```json
{
  "name": "Aarav",
  "course": "Machine Learning"
}
```

### Update Student

```http
PUT /students/:id
```

Request Body:

```json
{
  "name": "Updated Name",
  "course": "Updated Course"
}
```

### Delete Student

```http
DELETE /students/:id
```

---

## Concepts Practiced

This project was primarily built to strengthen backend fundamentals including:

- Node.js fundamentals
- Express.js
- REST APIs
- Routing
- Controllers
- Middleware
- CRUD Operations
- JSON data persistence
- Request handling
- Response handling
- Status codes
- Modular project structure
- Client-server communication
- Async operations using Fetch API

---

## Future Improvements

- MongoDB integration
- Authentication & Authorization
- Search by name/course
- Pagination
- Input validation middleware
- Error handling middleware
- Docker deployment
- Unit testing
- API documentation using Swagger

---

## Learning Outcome

This project served as my first complete backend application where I implemented a structured Express.js architecture with separate routes, controllers, utility modules, and persistent storage.

The goal was not only to build a working Student Management System, but also to gain practical experience with how backend applications are organized and how APIs are designed and consumed by a frontend.

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/aastik-codes/student-database-management-system.git
```

Navigate into the project:

```bash
cd student-database-management-system
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open in browser:

```text
http://localhost:3000
```

---

Built with Node.js, Express.js, and a lot of debugging.
