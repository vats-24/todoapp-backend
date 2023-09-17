import mongoose from "mongoose";


export const DBconnected = () => {
    mongoose.connect(process.env.MONGO_URI,{  // what if we want to connect our DB to cloud then we have to re-deploy that's why we use env file 
    dbName: "todo",
})
.then(()=> console.log("Database Connected"))
.catch(()=> console.log("Error"))
}