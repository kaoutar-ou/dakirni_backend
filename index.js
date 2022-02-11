const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/ContactRoute.js");
const sonRoute = require("./routes/SonRoute.js");
const safeZoneRoute = require("./routes/SafeZoneRoute.js");

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const db_url = process.env.DB_URL;
mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Database connected");
});

app.use("/contacts", contactRoute);
app.use("/sons", sonRoute);
app.use("/safezone", safeZoneRoute);

// app.get("/", (req, res) => {
//   // res.send("Hello");
//   response = "Hello";
//   return res.status(200).json(response);
// });

app.listen(port, () => console.log(`listening on localhost : ${port}`));
