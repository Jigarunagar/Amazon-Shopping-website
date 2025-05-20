const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { fullname, email, number, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ fullname, email, number, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ message: "Server error" });
  }
};
