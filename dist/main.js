// const a = "1";
// console.log("aaa", a)
//1. VARIABLES
// like in js, we define variables using const, var & let
var hello = "world";
// using const, u are not allowed to reassign the value
var tim = "now";
tim = "after";
//NB: always specify type with variable. this makes ur code easy to read
// 2. FUNCTIONS
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Sundze", "Mustapha"));
var user1 = {
    name: "Tris"
};
