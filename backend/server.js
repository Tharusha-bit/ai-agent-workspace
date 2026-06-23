const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Health Check Route
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({ status: "active", message: "AI Agent Engine is running smoothly" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is executing on port ${PORT}`);
});
