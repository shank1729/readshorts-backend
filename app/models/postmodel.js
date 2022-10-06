const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const PostSchema=new Schema({
    user_id:{ type: ObjectID },
  date: { type: String },
  title: { type: String },
  type:{ type: String },
  summary: { type: String },
  category_id:{type: Number},
main_img:{ type: String },
    para:{ type: Array },
    img:{ type: Array },
    likes:{type: Number},
    category:{type: String},
    author:{type: String},
    pfp:{type:String}

});
const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;