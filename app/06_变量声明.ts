/**
 * Created by wyq on 17/12/13.
 * TypeScript变量声明
 */

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
console.log(g()); // returns 11;

function f1() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}

console.log(f1()); // returns 2


