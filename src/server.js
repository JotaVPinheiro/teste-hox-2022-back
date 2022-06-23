require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const app = express();

app.use(routes);
app.use(express.json());
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
