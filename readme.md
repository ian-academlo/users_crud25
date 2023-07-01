# Sequelize

## Instalación de sequelize

```
npm i sequelize ph pg-hstore
```

## Conexión a una base de datos

1.  Para conectarnos a una base de datos debemos crear una instancia de Sequelize

Crear una nueva carpeta llamada (utils, config, database)
-- Crear un archivo llamado database.js

```
const { Sequelize } = require("sequelize");
```

Y luego creamos y configuramos la conexión

```
const { Sequelize } = require("sequelize");

const db = new Sequelize({
host: "localhost",
database: "cars_db",
port: 5432,
username: "iannacus",
password: "root",
dialect: "postgres",
});
```

Y por último exportamos la instancia

```
const { Sequelize } = require("sequelize");

const db = new Sequelize({
host: "localhost",
database: "cars_db",
port: 5432,
username: "iannacus",
password: "root",
dialect: "postgres",
});

module.exports = db;
```

## Comprbar la conexión de la base de datos

Vamos usar el metodo authenticate() para comprobar la conexión

_¿Cómo se hace?_

En app.js

- importar la instancia db que creamos
- usamos el metodo autenticate

## Modelos

Necesitamos una carpeta de modelos

dentro de la carpeta vamos a tener un archivo llamado
users.model.js
