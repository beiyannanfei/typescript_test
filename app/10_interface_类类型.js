/**
 * Created by wyq on 17/12/14.
 * 实现接口
 * 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约
 */
class Clock {
    constructor(h, m) {
    }
    setTime(d) {
        this.currentTime = d;
    }
}
// 类静态部分与实例部分的区别
// 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。
// 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误
// 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。
// constructor存在于类的静态部分，所以不在检查的范围内
/*interface ClockConstructot {
    new (hour: number, minute: number);
}

class Clock1 implements ClockConstructot {
    currentTime: Date;

    constructor(h: number, m: number); {}
}*/
