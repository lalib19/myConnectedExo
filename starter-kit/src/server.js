const express = require("express");
require("dotenv").config({ path: ".env" });
const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// explains commented flags at 18:10

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected");
});

// insert your router here

const cardsRouter = require("./routes/cards");
const listsRouter = require("./routes/lists");

app.use("/cards", cardsRouter);
app.use("/lists", listsRouter);


//other

app.listen(port, () => {
  logger.log(`API listening at http://localhost:${port}`);
});
