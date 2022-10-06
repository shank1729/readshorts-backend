const CategoryModel = require("../models/categorymodel");
let category = require("../resources/category.json");


let CategoryController = {

  getCategory: async function (request, response) {
    try {
      let result = await CategoryModel.find();
      response.status(200).send({
        status: true,
        cat: result,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  addCategory: async function (req, res) {
    try {
        let result = await CategoryModel.insertMany(category);
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

module.exports = CategoryController;
