const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// MongoDB
connectDB();

// Routes
app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    message: "Store API is running",
  });
});

app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Store API running on http://localhost:${PORT}`);
});