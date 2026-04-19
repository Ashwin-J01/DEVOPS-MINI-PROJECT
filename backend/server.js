const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// ENV variables
const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || "localhost";

// DB connection
mongoose.connect(`mongodb://${DB_HOST}:27017/testdb`)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// CREATE USER
app.post("/add-user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// GET USERS
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});