/**
 * Created by wyq on 17/12/14.
 */
class Greeter {
    constructor(msg) {
        this.greeting = msg;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let g20 = new Greeter("first ts class");
console.log(g20.greeting); //=> first ts class
console.log(g20.greet()); //=> Hello, first ts class
