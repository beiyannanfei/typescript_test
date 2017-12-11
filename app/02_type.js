/**
 * Created by wyq on 17/12/11.
 */
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
var u = 10;
// console.log(greeter(u));  //error 因为greeter函数接受的参数为string类型
// console.log(greeter());   //error 
