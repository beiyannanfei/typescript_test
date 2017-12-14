let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    if (-1 == result) {
        return false;
    }
    else {
        return true;
    }
};
console.log(mySearch("abcd", "ad")); //=> false
console.log(mySearch("abcd", "ab")); //=> true
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
// 比如，我们使用下面的代码重写上面的例子：
let mySearch1 = function (src, sub) {
    let result = src.search(sub);
    if (-1 == result) {
        return false;
    }
    else {
        return true;
    }
};
console.log(mySearch1("abcd", "ac")); //=> false
console.log(mySearch1("abcd", "bc")); //=> true
