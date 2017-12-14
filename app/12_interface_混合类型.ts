/**
 * Created by wyq on 17/12/14.
 * 混合类型
 * 先前我们提过，接口能够描述JavaScript里丰富的类型。
 * 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
 */
// 一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log("start: %j", start);
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log("reset");
    };
    return counter;
}

let c12 = getCounter();
c12(10);                                                //=> start: 10
c12.reset();                                            //=> reset
console.log("init interval: %j", c12.interval);         //=> init interval: 123
c12.interval = 5.0;
console.log("change interval: %j", c12.interval);       //=> change interval: 5

// 在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型。





