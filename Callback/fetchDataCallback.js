function fetchData(callback){
    console.log("fetching data...")

    setTimeout(function(){
        let data = {name:"pallavi",age:22}
        console.log("data fetched!")
        callback(data)
    }, 2000)
}

fetchData(function(result){
    console.log("received data:",result)
})