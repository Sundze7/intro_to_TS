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
    name: "Tris",
    age: 23,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Joe",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user1.name);
//4. UNION OPERATOR => |
// it is used to combine data types. Mostly used to check if variable is null, after fetching data
var userName = "Alex";
var pageName = '1';
var errorMessage = null;
var user = null;
