const UserModel = require("../models/usermodel");
let user = require("../resources/users.json");


let UserController = {

  getUser: async function (request, response) {
    try {
      let result = await UserModel.find();
      response.status(200).send({
        status: true,
        post: result,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  addUser: async function (req, res) {
    try {
        let result = await UserModel.insertMany(user);
        res.status(200).send({
          status: true,
          message: "added successfully",
          result: result,
        });
      } catch (error) {
        res.status(500).send({
          status: false,
          message: "server error",
          error,
        });
      }
  },
};

module.exports = UserController;
