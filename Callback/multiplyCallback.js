function multiply(a,b,callback){
    let result = a * b
    callback(result)
}

multiply(5, 4, function (output){
    console.log("result is:",output)
})