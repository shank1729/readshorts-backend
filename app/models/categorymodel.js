const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const CategorySchema=new Schema({
    category_id:{type: Number},
    category:{type:String},
    number:{type: Number}

});
const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;