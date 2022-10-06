const PostModel = require("../models/postmodel");
const CategoryModel = require("../models/categorymodel");

let PostController = {
  apiHome: function (request, response) {
    response.status(200).send({
      status: true,
    });
  },

  getPost: async function (request, response) {
    let { typ, id } = request.query;
    let  typee = typ ?  {type : typ} : null;
    let  cat = id ?{category_id: Number(id)}: null;
    try {
      
      let result = await PostModel.find({...typee,...cat});
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
  addPost: async function (req, res) {
    let data = req.body;
    try {
      let result = await PostModel.insertMany(data);
      await CategoryModel.updateOne({category_id : data.category_id},{
        $inc: { number: 1 }
      })
      res.status(200).send({
        status: true,
        message: "added successfully",
        result: result,
      });
    } 
    
     
    catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getBlog: async function(request,response)
  {
    try {
      let result = await PostModel.find({type:'blog'});
      const r= result.slice(0, 3)
      response.status(200).send({
        status: true,
        blog: r,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getStory: async function(request,response)
  {
    try {
      let result = await PostModel.find({type:'story'});
      const r= result.slice(0, 3)
      response.status(200).send({
        status: true,
        story: r,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getArticle: async function(request,response)
  {
    try {
      let result = await PostModel.find({type:'article'});
      const r= result.slice(0, 3)
      response.status(200).send({
        status: true,
        article: r,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getPostDetailsById: async function (request, response) {
    try {
      let { id } = request.params;
      let data = await PostModel.findById(id);
      response.status(200).send({
        status: true,
        result: data,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },

};

module.exports = PostController;
