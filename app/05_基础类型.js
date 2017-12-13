/**
 * Created by wyq on 17/12/12.
 */
var isDone = false;
var decLiteral = 6; //十进制
var hexLiteral = 0xf00d; //十六进制
var binaryLiteral = 10; //二进制
var octalLiteral = 484; //八进制
var myName = "bob";
myName = "smith";
var age = 30;
var sentence = "hello, my name is " + myName + ",\n\n" + age + " years old."; //可以直接跨行(反引号`)
var listA = [1, 2, 3]; //数组定义方式一
var listB = [4, 5, 6]; //数组定义方式二
//元组 Tuple
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var t1 = ["hello", 1234]; //定义一对值分别为string和number类型的元组
// t1 = [1, "a"];   //error
console.log(t1[0].substr(1));
// console.log(t1[1].substr(1));    //error
t1[2] = "world"; //当访问一个越界的元素，会使用联合类型替代, 字符串可以赋值给(string | number)类型
t1[3] = 100; //同上
// t1[4] = true;       //error 布尔不是(string | number)类型
//枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); //out => 1
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {})); //默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值
var c1 = Color1.Green;
console.log(c1); //out => 2
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 5] = "Blue";
})(Color2 || (Color2 = {})); //全部都采用手动赋值
var c2 = Color2.Green;
console.log(c2); //out => 3
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = "myRed"] = "Red";
    Color3[Color3["Green"] = "myGreen"] = "Green";
    Color3[Color3["Blue"] = "myBlue"] = "Blue";
})(Color3 || (Color3 = {})); //js中不会报错,但是不推荐
var c3 = Color3.Green;
console.log(c3);
var colorName = Color1[2]; //枚举类型提供的一个便利是你可以由枚举的值得到它的名字
console.log(colorName); //=>Green
//# sourceMappingURL=05_基础类型.js.map