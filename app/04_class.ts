/**
 * Created by wyq on 17/12/11.
 */
class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter04(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user04 = new Student("Jane", "M.", "User");

console.log(greeter04(user04));