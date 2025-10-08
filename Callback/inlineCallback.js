function greet (callback){
    console.log("welcome!")
    callback()

}

greet (function(){
    console.log("you are learning javscript")
})