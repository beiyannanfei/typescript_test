/**
 * Created by wyq on 17/12/15.
 * 公共，私有与受保护的修饰符
 * 默认为public
 * 在上面的例子里，我们可以自由的访问程序里定义的成员。
 * 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；
 * 例如，C#要求必须明确地使用public指定成员是可见的。
 * 在TypeScript里，成员都默认为 public。
 */
// 也可以明确的将一个成员标记成public。 我们可以用下面的方式来重写上面的 Animal类：
class Animal21 {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
//理解private
// 当成员被标记成private时，它就不能在声明它的类的外部访问。比如
class Animal_private {
    constructor(theName) {
        this.name = theName;
    }
}
// new Animal_private("Cat").name;//Error:(32, 27) TS2341: Property 'name' is private and only accessible within class 'Animal_private'.
// TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
// 然而，当我们比较带有private或protected成员的类型的时候，情况就不同了。
// 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个private成员，
// 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
// 下面来看一个例子，更好地说明了这一点
class AnimalEqual {
    constructor(theName) {
        this.name = theName;
    }
}
class Rhino extends AnimalEqual {
    constructor() {
        super("Rhino");
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new AnimalEqual("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
animal = rhino;
// animal = employee;//Error:(69, 1) TS2322: Type 'Employee' is not assignable to type 'AnimalEqual'.Types have separate declarations of a private property 'name'.
// 这个例子中有Animal和Rhino两个类，Rhino是Animal类的子类。
// 还有一个 Employee类，其类型看上去与Animal是相同的。
// 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。
// 因为 Animal和Rhino共享了来自Animal里的私有成员定义private name: string，因此它们是兼容的。
// 然而 Employee却不是这样。当把Employee赋值给Animal的时候，得到一个错误，说它们的类型不兼容。
// 尽管 Employee里也有一个私有成员name，但它明显不是Animal里面定义的那个。 
