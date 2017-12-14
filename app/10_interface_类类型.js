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
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
        console.log("DigitalClock-constructor %s:%s", h, m);
    }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) {
        console.log("AnalogClock-constructor %s:%s", h, m);
    }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17); //=> DigitalClock-constructor 12:17
let analog = createClock(AnalogClock, 7, 32); //=> AnalogClock-constructor 7:32
digital.tick(); //=> beep beep
analog.tick(); //=> tick tock
