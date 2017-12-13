/**
 * Created by wyq on 17/12/12.
 */
let isDone: boolean = false;

let decLiteral: number = 6;     //十进制
let hexLiteral: number = 0xf00d;    //十六进制
let binaryLiteral: number = 0b1010; //二进制
let octalLiteral: number = 0o744;   //八进制

let myName: string = "bob";
myName = "smith";
let age: number = 30;
let sentence: string = `hello, my name is ${myName},

${age} years old.`; //可以直接跨行(反引号`)

let listA: number[] = [1, 2, 3];        //数组定义方式一
let listB: Array<number> = [4, 5, 6];   //数组定义方式二

//元组 Tuple
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let t1: [string,number] = ["hello", 1234];     //定义一对值分别为string和number类型的元组
// t1 = [1, "a"];   //error
console.log(t1[0].substr(1));
// console.log(t1[1].substr(1));    //error
t1[2] = "world";    //当访问一个越界的元素，会使用联合类型替代, 字符串可以赋值给(string | number)类型
t1[3] = 100;        //同上
// t1[4] = true;       //error 布尔不是(string | number)类型

