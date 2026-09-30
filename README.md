# Student Management System

## Technologies
- HTML/CSS/JavaScript
- Node.js
- Express.js
- MySQL
- mysql2 connector
- SQL

## Setup

1. Install Node.js and MySQL.
2. Open MySQL and run `database.sql`.
3. Open `db.js` and replace `YOUR_MYSQL_PASSWORD` with your MySQL password.
4. Open a terminal in this project folder.
5. Run:

```bash
npm install
npm start
```

6. Open:
http://localhost:3000

## Architecture

Frontend -> Node.js/Express Controller -> MySQL Connector -> MySQL Database

## API
GET    /api/students
POST   /api/students
DELETE /api/students/:id
