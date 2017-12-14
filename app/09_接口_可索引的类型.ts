/**
 * Created by wyq on 17/12/14.
 * 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。
 * 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
 */

interface StringArray { //这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值
    [index: number]: string
}

let myArray: StringArray = ["bob", "fred"];
let myStr: string = myArray[0];
console.log("myStr: %j", myStr);

// 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。
// 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以。
// 下面的例子里， name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：
interface NumberDictionary {
    [index: string]: number;

    length: number;     // 可以，length是number类型
    // name: string     // 错误，`name`的类型不是索引类型的子类型
    name: number;
}



