/**
 * Created by wyq on 17/12/13.
 * TypeScript接口
 */
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "size 10 object"};
printLabel1(myObj1);

//可选属性 - 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log("mySquare: %j", mySquare);  //out => mySquare: {"color":"black","area":100}

//只读属性 - 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1 = {x: 100, y: 200};
// p1.x = 5;    //error

// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a07: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a07;
// ro[0] = 12;  //error Index signature in type 'ReadonlyArray<number>' only permits reading.
// ro.push(5);  //error Property 'push' does not exist on type 'ReadonlyArray<number>'.
// ro.length = 100;    //error Cannot assign to 'length' because it is a constant or a read-only property.
// a07 = ro;    //error Error:(58, 1) TS2322: Type 'ReadonlyArray<number>' is not assignable to type 'number[]'.Property 'push' is missing in type 'ReadonlyArray<number>'.
// 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。
let a07_: number[] = ro as number[];    //可以用类型断言重写

//额外的属性检查
//Error:(63, 31) TS2345: Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
// let mySquare1 = createSquare({colour: "red", width: 100});

//绕开这些检查非常简单。 最简便的方法是使用类型断言
let mySquare1 = createSquare({colour: "red", width: 100} as SquareConfig);
console.log("mySquare1: %j", mySquare1);

//如果一个接口 带有任意数量的其它属性，那么我们可以这样定义它
interface SquareConfig1 {//在这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么
    color?: string;
    width?: number;

    [propName: string]: any;    //其它字段
}
