function getCounter() {
    let counter = function (start) {
        console.log("start: %j", start);
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log("reset");
    };
    return counter;
}
let c12 = getCounter();
c12(10); //=> start: 10
c12.reset(); //=> reset
console.log("init interval: %j", c12.interval); //=> init interval: 123
c12.interval = 5.0;
console.log("change interval: %j", c12.interval); //=> change interval: 5
