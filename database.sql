CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(50) NOT NULL,
    marks INT NOT NULL
);

INSERT INTO students (name, branch, marks)
VALUES
('Ravi', 'CSE', 85),
('Anu', 'CSE', 91);