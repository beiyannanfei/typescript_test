/**
 * Created by wyq on 17/12/11.
 */
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter04(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user04 = new Student("Jane", "M.", "User");
console.log(greeter04(user04));
