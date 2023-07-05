const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users.routes");
require("dotenv").config();

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json()); // es muy común olvidar este middlewa
app.use(cors());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
