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

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}

//解构数组
function f2([first, second]: Array<number>) {
    console.log("==========", first);
    console.log("==========", second);
}
let input = [1, 2];
f2(input);

function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
    console.log("--------", a, b);
}
keepWholeObject({a: "10"});
keepWholeObject({a: "10", b: 20});
