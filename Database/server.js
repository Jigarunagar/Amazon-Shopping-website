const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/User");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.post("/signup", async (req, res) => {
  try {
    const { fullname, email, number, password } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }
    const existingNumber = await User.findOne({ number });
    if (existingNumber) {
      return res.status(400).json({ message: "Number already exists!" });
    }
    const newUser = new User({ fullname, email, number, password });
    await newUser.save();

    return res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found!" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password!" });
    }
    return res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => console.log("Server http://localhost:5000"));
