// const a = "1";
// console.log("aaa", a)

//1. VARIABLES

// like in js, we define variables using const, var & let
const hello: string = "world"
// using const, u are not allowed to reassign the value
let tim: string = "now"
tim = "after"

//NB: always specify type with variable. this makes ur code easy to read


// 2. FUNCTIONS
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname
}
console.log(getFullName("Sundze", "Mustapha"))

// 3. INTERFACE
// interface in TS is like a model or blueprint for creating entities.
// interface name is Capitalized and by default, their properties are mandatory. Use "?" at the end of property name to make it optional e.g: "age?: number"

interface User{
    name: string
    age?: number
}
const user1: User = {
    name: "Tris"
    
}