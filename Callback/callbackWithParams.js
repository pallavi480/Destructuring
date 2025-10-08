function add(a,b,callback){
    let sum = a + b
    callback(sum)
}

add(10,20,function(result){
    console.log("The sum is:",result)
})