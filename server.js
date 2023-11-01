const express = require("express");
const app = express();
const port = process.env.PORT || 5005;
require("./config");
require("./seed");

app.listen(port, () => {
  console.log(`Server is listen on ${port} `);
});
