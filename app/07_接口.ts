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

function createSquare(config: SquareConfig): {color: string; area: number} {
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
try {
    p1.x = 5;
} catch (e) {
    console.log("e: %j", e.message || e);
}