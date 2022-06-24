require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
