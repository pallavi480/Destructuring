function greet(name,callback){
    console.log("hello," + name);
    callback()
}

function saybye(){
    console.log("goodbye!")
}

greet("pallavi", saybye)