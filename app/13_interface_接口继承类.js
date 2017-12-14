/**
 * Created by wyq on 17/12/14.
 * 接口继承类
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
 * 接口同样会继承到类的private和protected成员。
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）。
 */
// 这是很有用的，当你有一个很深层次的继承，但是只想你的代码只是针对拥有特定属性的子类起作用的时候。
// 子类除了继承自基类外与基类没有任何联系。
class Control {
}
class Button extends Control {
    select() {
    }
}
class TextBox extends Control {
    select() {
    }
}
class Image1 {
    select() {
    }
}
class Location1 {
    select() {
    }
}
//在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。
// 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。
// 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。
// 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。
// 实际上，SelectableControl就像Control一样，并拥有一个select方法。
// Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），
// 但Image和Location类并不是这样的。
