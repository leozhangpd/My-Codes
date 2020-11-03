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

var fff = document.getElementById('fff');
fff.onclick = function (e) {
    console.log(e.target);
    return false;
};