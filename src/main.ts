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

interface UserInterface{
    name: string
    age?: number
    getMessage(): string
}
const user1: UserInterface = {
    name: "Tris",
    age: 23, 
    getMessage() {
        return "Hello" + name
    }   
}
const user2: UserInterface = {
    name:"Joe",
    getMessage() {
        return "Hello" + name
    } 
}
console.log(user1.name)

//4. UNION OPERATOR => |
// it is used to combine data types. Mostly used to check if variable is null, after fetching data

let userName: string = "Alex"
let pageName: string | number = '1' 
let errorMessage: string | null = null

let user: UserInterface | null =null