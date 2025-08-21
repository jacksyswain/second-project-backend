import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




const connectDb= async ()=>{
    try{
     const connectionIns= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
     console.log(`mongodb connected at host:${connectionIns.connection.host}`)
    }catch(error){
        console.log("connection error",error);
        process.exit(1)
    }
}

export default connectDb;