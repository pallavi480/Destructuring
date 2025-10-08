function divide(a,b,callback){
    if(b === 0){
        callback("Error:cannot divide by zero",null)
    }else{
        let result = a / b
        callback(null,result)
    }
}

divide(10,0,function(error,result){
    if (error){
        console.log(error)
    }else{
        console.log("result:",result)
    }
})