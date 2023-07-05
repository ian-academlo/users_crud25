const Users = require("../models/users.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.json(users);
  } catch {
    res.status(400).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body; //* {eamil, password}

    await Users.create(newUser); // * {email: 'lsadkjfdskl', password: 'ldkfasdkljf'}

    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname } = req.body;

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
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: { id }, // -> {id: id}
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
