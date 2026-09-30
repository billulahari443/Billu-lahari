const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/api/students", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM students ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/students", async (req, res) => {
  try {
    const { name, branch, marks } = req.body;
    if (!name || !branch || marks === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [result] = await db.execute(
      "INSERT INTO students (name, branch, marks) VALUES (?, ?, ?)",
      [name, branch, Number(marks)]
    );

    res.status(201).json({
      message: "Student added successfully",
      id: result.insertId
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/students/:id", async (req, res) => {
  try {
    await db.execute("DELETE FROM students WHERE id = ?", [req.params.id]);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});