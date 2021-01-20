window.onload = function(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var jgg = document.getElementsByClassName("jgg");
    var rgb;//存储随机背景色
    var round;
    var click = true;
    function clear() {
        for (var i=0;i<jgg.length;i++){
            jgg[i].style.background = 'orange';
        }
    }
    function run() {
        /*获取随机数字作用于div格子*/
        var grid = [0,1,2,3,4,5,6,7,8];
        var temp = [];
        clear();
        for (var i=0;i<3;i++){
            var x = Math.floor(Math.random()*jgg.length);
            // temp[i] = grid[x];
            // grid.splice(x,1);
            /*获取随机颜色作用于填充格子背景色*/
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            rgb = "rgb" + "(" + r +"," + g + "," + b + ")";
        /*实现格子的随机选择和赋予背景色*/
            var a = grid[x];
            // jgg[a].style.background = rgb;
            jgg[a].style.background = rgb;
            grid.splice(x,1);
        }
    }
    btn1.onclick = function () {
        clearInterval(round);
        round = setInterval(run,1000);
    };
    btn2.onclick = function () {
        clearInterval(round);
        clear();
    }
    
};



/*分割-----------------------------------------------------------------*/
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

// window.onload =function () {
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

    // var a = [1, 2, 3];
    // function change(z) {
    //     console.log(b);//[1,2,3]
    //     var b = 2;      //传值
    //     console.log(b);//2
    // }
    // // change(a);
    // var b = [1,5,7,8];
    // console.log(b);
    // console.log(change(b));   //[1,2,3]
// };
