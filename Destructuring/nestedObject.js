let employee = {
    id:1,
    details:{
        name:"pallavi",
        city:"buldhana"

    }
};

let {details: {name,city} }= employee;

console.log(name)
console.log(city)