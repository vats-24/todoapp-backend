import { app } from "./app.js";
import { DBconnected } from "./data/database.js";


DBconnected();
console.log(process.env.PORT);

app.listen(4000,()=>{
    console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`)  
}); 