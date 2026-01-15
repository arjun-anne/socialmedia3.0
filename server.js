const express = require("express");
const app = express();
const PORT = 3000;

let users = [
  { id: 1, username: "john_doe", followers: 120, following: 80 },
  { id: 2, username: "jane_smith", followers: 200, following: 150 },
];

let posts = [
  { id: 1, user_id: 1, content: "Hello World!", likes: 50 },
  { id: 2, user_id: 2, content: "Enjoying the sunshine ☀️", likes: 75 },
  { id: 3, user_id: 1, content: "Sunshine makes me happy 😊", likes: 40 },
  { id: 4, user_id: 2, content: "Coding late at night 🌙", likes: 30 },
];

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Simple Social Media API" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

// Fetch single user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // Convert string to number
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
