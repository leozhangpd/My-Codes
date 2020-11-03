// window.onload = function(){//被defer属性代替了
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    // var div = document.documentElement.ELEMENT_NODE;//获取页面所有格子，以便填充随机颜色
    var div = document.getElementsByClassName("block");
    // console.log(div);
    var round;//循环函数
    var click = false;//防止重复点击
    /*复原颜色*/
    function clears() {
        for(var i=0;i<9;i++){
            div[i].style.background = 'orange';
        }
    }
    /*随机出现三种颜色的具体代码*/
    function roa() {
        /*随机数字*/
        var grids = [0,1,2,3,4,5,6,7,8];//元素中的任意三个元素赋给div数组和方便数字去重
        clears();//复原颜色，要放在填充颜色代码之前才行，否则刚生成的随机颜色就被清除了
        for (var i=0;i<3;i++){
            var x = Math.floor(Math.random()*grids.length);//数组grids的随机下标
        /*随机rgb颜色*/
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var rgb = "rgb" + "("+r+","+g+","+b+")";
        /*设置随机选择元素并填充随机颜色*/
            var n = grids[x];//数组grids中的元素赋给n，为之后的div当作下标
            div[n].style.background = rgb;
        /*最后删除用过的数组元素，防止重复*/
            grids.splice(x,1);//该方法的第一个参数是按照数组下标来定位的，第二个参数是删除具体数量，删除点从定位好的那个下标点开始删。该行代码的作用是删除用过的数字，以防止出现相同的数字导致显示颜色的格子数量不全。
        }
    }
    /*点击闪按钮后，按照指定的时间间隔进行循环播放*/
    btn1.onclick = function () {
        while (!click){//在运行时无法再一次点击，可防止重复点击出现bug。当变量click的默认值为false时，while语句的参数!click变为true，则该语句运行
            click = true;
            round = window.setInterval(roa,1200);
        }
    };
    /*结束闪按钮*/
    btn2.onclick = function () {
        click = false;//复位，准备下一次的while语句判断
        window.clearInterval(round);//清除定时器的效果
        clears();//复原颜色
    };
// };

/*另外一种不太一样的方式*/
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var jgg = document.getElementsByClassName("jgg");
// var rgb = [];//存储随机背景色
// var click = true;
// var round;
// function clear() {
//     for (var i=0;i<jgg.length;i++){
//         jgg[i].style.background = 'orange';
//     }
// }
// function run() {
//     /*获取随机数字作用于div格子*/
//     var grid = [0,1,2,3,4,5,6,7,8];
//     var temp = [];
//     for (var i=0;i<3;i++){
//         var x = Math.floor(Math.random()*grid.length);
//         temp[i] = grid[x];
//         grid.splice(x,1);
//         /*获取随机颜色作用于填充格子背景色*/
//         var r = Math.floor(Math.random()*256);
//         var g = Math.floor(Math.random()*256);
//         var b = Math.floor(Math.random()*256);
//         rgb[i] = "rgb" + "(" + r +"," + g + "," + b + ")";
//         clear();
//     }
//     /*实现格子的随机选择和赋予背景色*/
//     for (var i=0;i<3;i++){
//         var a = temp[i];
//         jgg[a].style.background = rgb[i];
//     }
// }
// btn1.onclick = function () {
//     clearInterval(round);
//     round = setInterval(run,1000);
// };
// btn2.onclick = function () {
//     clearInterval(round);
//     clear();
// }