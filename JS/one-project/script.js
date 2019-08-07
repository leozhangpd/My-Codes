window.onload = function(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var div = document.getElementById("main").children;//获取要随机的元素
    var round;//循环函数
    /*复原颜色*/
    function clears() {
        for(var i=0;i<9;i++){
            div[i].style.background = 'orange';
        }
    }
    /*开始闪按钮*/
    btn1.onclick = function () {
        function roa(grids,temp) {
            /*随机数字*/
            grids = [0,1,2,3,4,5,6,7,8];//数字用作数组下标
            temp= [];//临时存储随机数
            for (var i=0;i<3;i++){
                var x = Math.floor(Math.random()*grids.length);
                temp[i] = grids[x];
                grids.splice(x,1);
            }
            /*随机rgb颜色*/
            function rrc() {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                return "rgb" + "("+r+","+g+","+b+")";
            }
            clears();//复原颜色，要在
            /*随机选择元素并填充随机颜色*/
            for(var i=0;i<3;i++){
                var n = temp[i];
                div[n].style.background = rrc();//填函数不用引号
            }
        }
        round = window.setInterval(roa,1200);
    }
    /*结束闪按钮*/
    btn2.onclick = function () {
        window.clearInterval(round);
        clears();//复原颜色
    }
}
