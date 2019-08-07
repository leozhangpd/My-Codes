// window.onload = function(){
//     var btn1 = document.getElementById("btn1");
//     var btn2 = document.getElementById("btn2");
//     btn1.onclick = function () {
//         alert("hello world!");
//     }
//     btn2.onclick = function () {
//         alert("hello javascript!");
//     }
//     var txt = btn1.firstChild;
// //3 '#text' '测试'
//     console.log(txt.nodeType,txt.nodeName,txt.nodeValue);
//     console.log(Node.TEXT_NODE === 3);//true
// }
window.onload =function () {
    // btn1.onclick = function (){
        // var btn = document.getElementById("text");
        // if (btn.nodeType == Node.ELEMENT_NODE){
        //     alert("Yes");
        // }else{alert("no");}

        // var list = document.getElementById("text");
        // var add = document.createElement("div");
        // var text = document.createTextNode("hello!");
        // add.appendChild(text);
        // list.removeChild(list.firstChild);
    //     var block = document.getElementById("text");
    //     block.setAttribute("title","hello!");
    // }
    // var texts = document.getElementById("text").getAttributeNode("id");
    // console.log(texts);

    // function aa() {
    //     x += 1
    //     console.log(x);
    // }
    //  x = 2;
    // aa();//NaN

    // function t(){
    //     alert(2);
    // }
    // var t = function(){
    //     alert(1);
    // }
    // console.log(t());

    // var a = 1;
    // function f(a) {
    //     a = 3;
    // }
    // f(a);
    // console.info(a); // 3

    // function f(a) {
    //     a = 3;
    //     b = 10;
    // }
    // var a = 1;
    // f(a);
    // console.info(a); // 3
    // console.info(f(a)); // 报错

    var a = [1, 2, 3];
    function change() {
        console.log(a);//[1,2,3]
        a = 2;      //传值
        console.log(a);//2
    }
    change(a);
    console.log(a);   //[1,2,3]
};
