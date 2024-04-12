import express, { Request, Response } from "express";
import mongoose from "mongoose";

// Define MongoDB connection URI
const mongoURI =
  "mongodb://atlas-sql-643fc9207aeabd5c51321955-aqpdr.a.query.mongodb.net/Pizza?ssl=true&authSource=admin";

// Define MongoDB schema and model
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Create Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
// app.get("/", route);

// Start the server
app.listen(process.env.PORT || 3000, function () {
  console.log("server app listening on port " + (process.env.PORT || 3000));
});
