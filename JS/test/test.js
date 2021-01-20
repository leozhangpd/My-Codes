/*
function aa(name) {
    this.name = name;
}
var bb = new aa('jack');
console.log(bb.prototype);*/

/*
var f = function fact(x) {
    fact(1);
    if (x <= 1)
        return 1;
    else
        return x*fact;
};
console.log(f(2));*/

/*
for (var i =0;i < 10;i++){
    function ined() {
        return console.log(123);
    }
    var aa=1;
}
ined();*/

/*
const undefined = "undefined";
var aaa = undefined;
console.log(aaa);*/

/*
console.log(a);
var a = 1;
var a = function () {
    return 2
};
function a() {
    return 3;
}*/
/*
var condition = true;
if(condition){
    let a = function (){console.log(1);};
    console.log(a());
}
console.log(a());
function a(){return 1;}

console.log(a);
var a=function(){return 2;};*/

/*
fn(a);
var a= 1;
function fn() {
console.log(a);
}*/

/*
var person = {};
Object.defineProperty(person, "name",{
    configurable: true,
    value:"alice"
});
console.log(person.name);
var ts = Object.getOwnPropertyDescriptor(person, "name");
console.log(ts.configurable);*/

/*
function factorial(num) {
    if (num <=1) {
        return 1;
    } else {
        return num*factorial(num-1);
    }
}
var trueFactorial = factorial;
factorial = function () {
    return 0;
};
console.log(trueFactorial(5));
console.log(factorial(5));*/

/*
function outer() {
    inner();
}
function inner() {
    console.log(arguments.callee.caller);
}
outer();*/


/*
let  para1={
    a:1;
    b:2;
    c:3;
};
let T1=function(obj){
    console.log(obj.a);
}(para1);*/

/*var q = 6;
(function f(g) {
    console.log(g);
})(q);*/

/*
var i = 0;// 计数器
var a=(function(a){
    console.log("i am running...");
    return arguments.callee;
})();

a();
console.log(a());*/

/*
var abc = Function("x","y","return x*y;");
console.log(abc(2,3)); // "6"*/

/*function f(a,b) {
    return arguments[0];
}
console.log(f());*/
/*
function a (){
    a.run = function() {console.log(123)}
}
a.prototype.d = function () {
    return 333;
}
a();
console.log(a.prototype);*/

/*
function creatFunctions(){
    var result = new Array ();
    for (var i=0; i<10;i++){
        result[i] = function(num){
            return  function () {
                return num
            };
        }(i);
    }
    return result;
}
creatFunctions();*/

/*
function createf(){
    var result = new Array();
    for (var i=0; i<10; i++) {
        result[i] = function(){return i;};
    }
    return result;
}
createf();*/



/*function bar() {
    return console.log('call2函数的this直接跳过prototype，指向bar函数');
}
Function.prototype.call2 = function() {
    // 首先要获取调用call2的函数，用this可以获取
    return this;
}

bar.call2();
var a = Object(123);
console.log(a);*/

/*Function.prototype.apply = function (context,arr) {
    var context = Object(context) || window;
    context.fn = this;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 1, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }
        var result = context.fn(...args)
    }

    delete context.fn
    return result;
}
var obj = {
    value: 1
}
function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}
console.log(bar.apply(obj, 'kevin', 18));
*/

/*
bar.__proto__.call2 = function() {
    // 首先要获取调用call2的函数，用this可以获取
    this;
}

function bar() {
    return console.log('call2函数的this直接跳过prototype，指向bar函数');
}
bar.call2*/

/* var fff = document.getElementById('fff');
fff.onclick = function (e) {
    console.log(e.target);
    return false;
};
console.log(Math.ceil(0.1));
 */
/* 关于关于在数组中的元素进行随机排列：
rand范围        0~0   0~1    0~2  0~3  0~4  0~5  0~6  0~7  0~8  每一次的循环代表了不同的迭代总数量环境（index+1），也是增加了一个概率的环境
shuffled[rand]  0     1      0    2    3    2    6    3    0    random()提供了随机能力，index提供了随机空间，即增加了可能性
shuffled[index] 0=0   1=1    2=0  3=2  4=3  5=2  6=6  7=3  8=0  得出的某个概率值的元素（右边）总是会覆盖当前总数的最大值的元素（左边），即末尾位置，i个数
                udfd  udfd   0    0    0    3    udfd 4    2    根据规律前面完成的随机数总能弥补后面的的随机数，覆盖undefined。
a[index]        0     1      2    3    4    5    6    7    8    
shuffled[rand]  0:0   1:1    0:2  2:3  3:4  2:5  6:6  3:7  0:8  如果rand是总数的最大值，数组元素必然是undefined，但当执行第二个表达式后，可直接看成                         0     1      2    3    4    5    6    7    8    shuffled[index] = a[index]，此时元素的undefined被马上重写了，如果rand是小于总数最大值，则                                                                 数组shuffled之前包含非undefined值的元素赋值给shuffled[index]
                                                                   达成以上条件后，则可稳定的分配随机数了，没有undefined也没有重复 */


 /*let arr = ['a','b','c','d','e'];
let count = (new Array(5)).fill(0);
console.log(count[arr.indexOf('e')]+1);
console.log(count); */

/* let n = 10000;
let count = (new Array(10)).fill(0)
for(let i=0;i<n;i++){
    let arr = ['a','b','c','d','e','f','g','h','i','j'];
    arr.sort(() => Math.random()-0.5);
    count[arr.indexOf('a')]++;
}
console.log(count); */


// var grids = ['a','b','c','d','e','f','g','h','i','j'];
// var count = (Array(10)).fill(0); 
// for (var j=0;j<10;j++) {
    //     for (var i=grids.length;i>0;i--) {
    //             var x = Math.floor(Math.random() * i);
    //             var n = grids[i-1];
    //             grids[i] = grids[x];
    //             grids[x] = n;
    //             console.log(grids[x]);
    // }
        // count[grids.indexOf('a')]++;
        
// }
// console.log(count);

/* var a=[1,2];
var b=[2,1];
[a[0],a[1]] = [b[0],b[1]];
console.log(a);//[2,1]
console.log(b);//[1,2] */

/* var a = ['a','b','c','d','e','f','g','h','i','j']
function shuffle(a) {
  var length = a.length;
  var shuffled = Array(length);
  var tt = Array(10).fill(0);
  for (var i = 10; i--;) {
      for (var index = 0, rand; index < length; index++) {
            rand = ~~(Math.random() * (index + 1));
            shuffled[index] = shuffled[rand];
            shuffled[rand] = a[index];
      }
      tt[shuffled.indexOf('a')]++;
  }

  return console.log(tt);
  ;
}
shuffle(a)
 */

/* const WECHAR_NAME = Symbol();
const WECHAR_REG = Symbol();
let obj = {
  ryear:2020,
  [WECHAR_NAME]: "前端达人",
  [WECHAR_REG]: 2014
}
console.log(Object.keys(obj));
console.log(JSON.stringify(obj));
console.log(obj[WECHAR_NAME]);
console.log(Object.getOwnPropertySymbols(obj)); */

/* var modules = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  var unboundGetX =modules.getX;
  var boundGetYa = unboundGetX.bind(modules);
console.log(boundGetYa()); */
/* 
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = Object;
obj.value = '11';
obj = new bindFoo('18');
console.log(obj); */

/* var fb = function (){}
var fa = function (){}
var ff = function (){}
fb.prototype.name = 'alice';
ff.prototype = fb.prototype;
ff.prototype = new fa();
ff.prototype.name = 'mike';
console.log(fb.prototype.name); */

// 构造器函数
/* var aa = function (name, age) {
    this.name = name;
    this.age = age;
};
aa.prototype.sayName = function () {
    console.log(this.name);
};
//自己定义的new方法
var newMethod = function (aa, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    //let child = Object.create(num.prototype);
    // child.__proto__ = num.prototype;
    // 2.将this和调用参数传给构造器执行
    //let result = num.apply(child, rest);
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    //return typeof result  === 'object' ? result : child;
    console.log(aa.prototype);
    
    
};
newMethod()
//创建实例，将构造函数Parent与形参作为参数传入
//const child = newMethod(nums, 'echo', 26);
//child.age; //'echo'; */
/* 
let Parent = function (name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
    // 2.将this和调用参数传给构造器执行
    let result = Parent.apply(child, rest);
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    return result;
};
newMethod(Parent);
//创建实例，将构造函数Parent与形参作为参数传入
//const child = newMethod(Parent, 'echo', 26);
//child.sayName() //'echo'; */

/* function fullName(name,age) {
    this.firstName = name;
    this.age = age;
}
var fun = function (){};
fullName.call(fun,'alice',18);
console.log(fun); */

/* var aa;
function fullName(name,age) {
    //fullName.firstName = 'opp';
    var fullName = arguments.callee;
    fullName.age = 18;
    aa = fullName.age;
    //console.log(fullName);
}
fullName();
fullName.age; */

/* function aas(){
    //this.uu = 999;
}
function ssa(){}
aas.prototype.setname = 'Alice';
ssa = new aas();
console.log(ssa.setname);
 */
//var ggg = ssa.prototype.constructor;
//ggg.setname

/* function person(){
    person.names = "tom";
}
person()
console.log(person.names); */

/* function personsa(){personsa.name = 66666;}
personsa.prototype.name = 'yoyoyo';
var ii = new personsa;
var lo = new personsa;
li.name */

// function faa(){
//     let this = {}
//     return this;
// }
// var oo = new faa();
// typeof oo;
// arguments

/* console.time('querySelector');
for (var i = 0; i < 100000; i++) {
    document.querySelector('.player-number');
}
console.timeEnd('querySelector');

console.time('getElementsByClassName');
for (var i = 0; i < 100000; i++) {
    //document.getElementById("btn1");
    document.getElementsByClassName("player-number");
}
console.timeEnd('getElementsByClassName');
 */

// let arr = [1, 2, 3, 4, 5];
// var num = arr.forEach((num, index) => {
//     return (arr[index] = num * 2);
// });
// console.log('forEach:',arr);

// let arr = [1, 2, 3, 4, 5];
// var num = arr.map(num => {
//     return num * 2;
// });
// console.log('map:',num);

// let arr = [1, 2, 3, 4, 5];
// var num = arr.forEach((num) => {
//     console.log(num);
// });

//var a = 666;
//console.log(Object(a));

class Parent {
    /*static myMethod(msg) {  // 父类的方法之前加静态static关键字
        console.log('static1', msg);
    }*/

    myMethod(msg) {            // 父类的私有普通方法
        console.log('instance2', msg);
    }
}

class Child extends Parent {  // 类child继承自篇Parent
    constructor() {    // 子类的私有myMethod方法前声明static
        super();
        //super.myMethod(msg); // super在静态方法中指向父类, 而不是父类的原型
    }

    myMethod(msg) {
        super.myMethod(msg); // super在普通方法中指向父类的原型
    }
}

Child.myMethod(1); // static1 1

//var child = new Child();
//child.myMethod(2); // instance2 2