/**
 * Created by wyq on 17/12/14.
 * 实现接口
 * 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约
 */

// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员
interface ClockInterface1 {
    currentTime: Date;

    setTime(d: Date);   //可以在接口中描述一个方法，在类里实现它
}

class Clock implements ClockInterface1 {
    currentTime: Date;

    constructor(h: number, m: number) {
    }

    setTime(d: Date) {
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

// 因此，我们应该直接操作类的静态部分。
// 看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface为实例方法所用。
// 为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
        console.log("DigitalClock-constructor %s:%s", h, m);
    }

    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
        console.log("AnalogClock-constructor %s:%s", h, m);
    }

    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);    //=> DigitalClock-constructor 12:17
let analog = createClock(AnalogClock, 7, 32);       //=> AnalogClock-constructor 7:32
digital.tick();     //=> beep beep
analog.tick();      //=> tick tock







