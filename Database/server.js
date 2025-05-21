require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.post("/signup", async (req, res) => {
  try {
    const { fullname, email, number, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }

    // Create new user
    const newUser = new User({
      fullname,
      email,
      number,
      password,
    });

    await newUser.save();
    res.status(201).json("Signup successful");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json("Server error");
  }
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
