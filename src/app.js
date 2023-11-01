const express = require("express")
const app = express();

app.listen (3031, () => console.log ("Server on", 3031))
const mainRouter = require ("./routes/main-router")
app.use (mainRouter)
  