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
var rate = ['dragon', 'coffee'];
var money = 'dollars';
// 6. Type VOID (a set of undefined and null)
// void returns no value
var doSomething = function () {
    console.log("doSomething");
};
// 7.Type Any. This turns off TS checks
// Dont any to ignore bugs. Any is not a solution but a start of bigger problems
var foo = "foo";
console.log(foo.bar());
// 8. Type never
// a function with never cannot be executed to the end
var something = function () {
    throw "never";
};
//9. Type unknown
// we cannot assign unkown to other data types
//10. Type assertion (as)
// it is used to convert from one data type to another
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
// to coonvert from string to number, first convert string to unknown, then to number
var pageNum = '1';
var numericPageNum = pageNum;
