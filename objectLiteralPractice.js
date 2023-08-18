var person = {
    name:"Maria",
    age: 55,
    isStudent:true,
    hobbies: ["reading","dancing"]
};
//console.log(person);
//console.log("age:", person.age);

person.city = "Buenos Aires",
person.jobs = "Engineer";

var keys = Object.keys(person);
console.log("Keys:", keys);