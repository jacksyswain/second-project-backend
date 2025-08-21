// require ('dotenv').config();
import connectDb from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${prosses.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed", err)
})





// ;(async ()=>{
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }catch(error){
//         console.error("error :",error);
        
//     }
// })()