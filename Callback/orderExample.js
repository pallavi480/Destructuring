function orderPizza(callback){
    console.log("ordering pizza...")
    setTimeout(function(){
        console.log("pizza ready!")
        callback()
    },3000)
}

orderPizza(function(){
    console.log("eating pizza🍕")
})