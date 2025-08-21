import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema({
videofile:{
    type:String,
    required:true,

} ,
thumbnell:{
   type:String,
    required:true, 
} ,
titel:{
    type:String,
    required:true,
} ,
discription:{
    type:Number,
    required:true,
},
views:{
    type:Number,
    default:0
},
ispublished:{
    type:Boolean,
    default:true
},
creater:{
    type:Schema.Types.ObjectId,
    ref:"User"
}

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate);

export const Video= mongoose.model("Video", videoSchema) ;