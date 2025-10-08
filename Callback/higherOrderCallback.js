function doOperation(a,b,operation){
    return operation(a,b)
}

function add(x,y){
    return x + y
}

function multiply(x, y){
    return x * y
}

console.log("sum:",doOperation(5,3,add))
console.log("product:",doOperation(5,3,multiply))