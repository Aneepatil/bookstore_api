const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRouter = require('./routes/bookRouter')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();
const port = process.env.PORT || 8000
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("MongoDB Connected Successfully....."))
  .catch((error) => console.log(error));

app.use("/api",bookRouter);


app.listen(port, () => {
  console.log("Backend Server is running...");
});
