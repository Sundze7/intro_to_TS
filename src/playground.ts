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

// 5. Type Aliasing
// they are typically defined at the top and used globally in ur code. Just like interfaces, they begin with a capital letter
type ID = string
type Pswd = string
type Random = string
type MaybeRandom = string | null

interface EmployeeInterface {
    id: ID
    password: Pswd
}

const rate: Random[] = ['dragon', 'coffee']
const money: MaybeRandom = 'dollars'

// 6. Type VOID (a set of undefined and null)
// void returns no value

const doSomething = (): void => {
    console.log("doSomething")
}

// 7.Type Any. This turns off TS checks
// Dont any to ignore bugs. Any is not a solution but a start of bigger problems

let foo: any = "foo"
console.log(foo.bar())

// 8. Type never
// a function with never cannot be executed to the end

const something = (): never => {
    throw "never"
}

//9. Type unknown
// we cannot assign unkown to other data types

//10. Type assertion (as)
// it is used to convert from one data type to another

let vAny: any = 10
let vUnknown: unknown = 10

let s1: string = vAny;
let s2: string = vUnknown as string

// to coonvert from string to number, first convert string to unknown, then to number
let pageNum: string = '1'
let numericPageNum: number = (pageNum as unknown) as number