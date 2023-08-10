const express = require("express");
const cors = require("cors");
const compoundApi = require("./src/routes/compoundRouter");

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(compoundApi);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
