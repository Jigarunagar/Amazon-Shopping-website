const express = require("express");
const mongoose = require("./MongoDB");
const cors = require("cors");
const User = require('./mongooseschema');
const app = express();
app.use(cors());
app.use(express.json());
  
  

app.post("/signup", async (req, res) => {
  const { fullname, email, number, password } = req.body;

  try {
      // Check if the email or number already exists 
      const existingEmail = await User.findOne({ email });
      const existingNumber = await User.findOne({ number });

      if (existingEmail) {
          return res.status(400).json({ message: "Email already exists!" });
      }

      if (existingNumber) {
          return res.status(400).json({ message: "Phone number already exists!" });
      }

      const newUser = new User({ fullname, email, number, password });
      await newUser.save();
      res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
      res.status(500).json({ message: "Signup failed", error });
  }
}); 
 

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (user) {
    res.json({ message: "Login successful", user });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});



// Start server
app.listen(4880, () => {
  console.log("Server running on http://localhost:4880");
});
