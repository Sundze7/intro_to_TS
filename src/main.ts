interface PersonInterface{
    getFullname(): string
}

class Person implements PersonInterface{
    firstname: string
    lastname: string
    readonly ID: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstname = firstName
        this.lastname = lastName
    }


    getFullname(): string {
        return `${this.firstname} ${this.lastname}`
    }
}

class Man extends Person {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const person = new Person("Easter", "Bunny")
console.log(person.getFullname)
console.log(Person.maxAge)