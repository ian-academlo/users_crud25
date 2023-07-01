const express = require("express");
const db = require("./utils/database"); // no lleva la extensión
const Users = require("./models/users.model");

Users;

db.authenticate()
  .then(() => {
    console.log("Base de datos 1 conectada correctamente");
  })
  .catch((error) => console.log(error));

db.sync() // si no existe la tabla, la crea. De lo contrario nada.
  .then(() => console.log("base de datos sincronizada"));

const app = express();

app.use(express.json()); // es muy común olvidar este middlewa

//************** CRUD ********************

//! ************* CREATE *****************
//* INSERT INTO table_name (column1, column2) VALUES (value1, value2);

app.post("/users", async (req, res) => {
  // manejo de excepciones
  //! better-comments
  try {
    // TODO obtener la información del body
    const newUser = req.body; //* {eamil, password}

    // TODO mandar a crear con la informacion obtenida
    await Users.create(newUser); // * {email: 'lsadkjfdskl', password: 'ldkfasdkljf'}

    // TODO responder que se ha realizado la acción.
    // por defecto se envia status 200
    res.status(201).send();
  } catch (error) {
    // atrapar el error
    res.status(400).json(error);
  }
});

// ! ***************+ READ
// * SELECT * FROM users;
// * SELECT id, name, lastname, email FROM users;
// ? Users.findAll();

app.get("/users", async (req, res) => {
  try {
    // TODO Mandar a buscar a todos los usuarios
    const users = await Users.findAll({
      // attributes: ["id", "name", "lastname", "email"],
      attributes: {
        exclude: ["password"],
      },
    });
    // TODO Responder al cliente
    res.json(users);
  } catch {
    res.status(400).json(error);
  }
});

// Encontrar a un usuario por su id
// path params -> parametros de ruta
app.get("/users/:id", async (req, res) => {
  // {params: {
  //   id: 1,
  //   username: 'lsdhf',
  //   age: 'adlfh'
  // }}
  try {
    // TODO obtener el id de la ruta
    const { id } = req.params;

    // TODO realizar la consulta a la BD
    const user = await Users.findByPk(id);

    // TODO Responder al cliente
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

//! *********************** UPDATE

app.put("/users/:id", async (req, res) => {
  try {
    // solo se permitirá modificar el name, lastname
    // TODO obtener el id del usuario
    // TODO obtener el body con la información
    const { id } = req.params;
    // const userInfo = req.body;
    const { name, lastname } = req.body;

    // todo relizar la consulta para actualizar
    // * responde un numero ( la canitdad de filas modificadas )
    const user = await Users.update(
      { name, lastname },
      {
        where: { id }, // --> shorthand { id: id }
      }
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});

//! ********************** DELETE
app.delete("/users/:id", async (req, res) => {
  try {
    // todo obtener el id de la ruta
    const { id } = req.params;
    // todo eliminar en la base de datos
    await Users.destroy({
      where: { id }, // -> {id: id}
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

app.listen(8000, () => {
  console.log("Servidor corriendo");
});
