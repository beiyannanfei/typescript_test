/**
 * Created by wyq on 17/12/14.
 * 和类一样，接口也可以相互扩展。
 * 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 */
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = {
    sideLength: 10,     //sideLength 和 color 两个属性必须同时存在
    color: "blue"
};

// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface PenStroke {
    penWidth: number;
}

interface Square1 extends Shape, PenStroke {
    sideLength: number;
}

let square1: Square1 = {
    color: "red",
    sideLength: 20,
    penWidth: 10
};





