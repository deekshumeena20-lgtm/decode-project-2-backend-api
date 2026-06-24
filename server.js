const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, department } = req.body;

  if (!name || !department) {
    return res.status(400).json({
      message: "Name and Department are required"
    });
  }

  students.push({
    id: students.length + 1,
    name,
    department
  });

  res.status(201).json({
    message: "Student Added Successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
