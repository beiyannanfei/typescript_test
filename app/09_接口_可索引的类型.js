/**
 * Created by wyq on 17/12/14.
 * 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。
 * 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
 */
let myArray = ["bob", "fred"];
let myStr = myArray[0];
console.log("myStr: %j", myStr);
