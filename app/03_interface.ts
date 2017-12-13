/**
 * Created by wyq on 17/12/11.
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter03(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user03 = { firstName: "Jane", lastName: "User" };

console.log(greeter03(user03));