/**
 * Created by wyq on 17/12/13.
 * TypeScript变量声明
 */
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
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
var _loop_1 = function(i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
//# sourceMappingURL=06_变量声明.js.map