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
/*enum Color3 {Red = "myRed", Green = "myGreen", Blue = "myBlue"}     //js中不会报错,但是不推荐
 let c3: Color3 = Color3.Green;
 console.log(c3);*/
var colorName = Color1[2]; //枚举类型提供的一个便利是你可以由枚举的值得到它的名字
console.log(colorName); //=>Green
/*任意值 any  -- 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，
 我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
 那么我们可以使用 any类型来标记这些变量*/
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
var listAny = [1, true, "free"];
listAny[3] = 100;
console.log(listAny);
// 空值-某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log("this is my warning message");
}
var unusable = undefined; //声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
var unusable1 = null;
// Null 和 Undefined -- TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
// let u: undefined = undefined;
// let n: null = null;
/**
 * 类型断言
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 * 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
 * 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
 */
//类型断言有两种形式。 其一是“尖括号”语法：
var someValue = "this is a string";
var strLength = someValue.length;
//另一个为as语法：
var strLength0 = someValue.length; //两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
//# sourceMappingURL=05_基础类型.js.map