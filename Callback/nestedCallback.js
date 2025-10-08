function step1(callback) {
    console.log("step 1 complete")
    callback()
}

function step2(callback){
    console.log("step 2 complete")
    callback()
}

function step3(callback){
    console.log("step 3 complete")
}

step1(function(){
    step2(function(){
        step3()
    })
})