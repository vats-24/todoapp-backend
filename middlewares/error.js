class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddleware= (err,req,res,next)=>{
    console.log(err.message)

    err.message = err.message || "INTERNAL SERVER ERROR"
    err.statusCode = err.statusCode || 500;

    return res.status(404).json({
        success:false,
        message:err.message
    })
}

export default ErrorHandler