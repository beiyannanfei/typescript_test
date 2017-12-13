/**
 * Created by wyq on 17/12/13.
 * TypeScript接口
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
let myObj1 = { size: 10, label: "size 10 object" };
printLabel1(myObj1);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log("mySquare: %j", mySquare); //out => mySquare: {"color":"black","area":100}
let p1 = { x: 100, y: 200 };
try {
    p1.x = 5;
}
catch (e) {
    console.log("e: %j", e.message || e);
}
