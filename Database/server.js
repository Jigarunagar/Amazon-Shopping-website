require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api", require("./routes/auth"));

const PORT = process.env.PORT || 4808;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
