var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var wolf = document.getElementById("wolf");
var footman = document.getElementById("footman");
var killer = 2;
var civilian = 6;
var arr;
var arrB; 
btn1.onclick = ()=>window.location.href = "home_page.html" ;
var arrS = (function () {
    arr = (Array(killer)).fill('killer');
    arrB = (Array(civilian)).fill('civilian');
    arr.push.apply(arr,arrB); 
    for (let i = arr.length;i>=0;i--){//在谷歌、ie最新版本、edge上经过测试后发现第二个表达式不写也没问题
        let rand = ~~(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;  
    }
    return arguments.callee;    
})();
function sum_num(value) {
    switch (true) {
        case value == 4 || value == 5:
            killer = 1;
            civilian = value-killer;
            break;
        case value >= 6 && value <= 8:
            killer = 2;
            civilian = value - killer;
            break;
        case value >= 9 && value <= 11:
            killer = 3;
            civilian = value-killer;
            break;
        case value >= 12 && value <= 15:
            killer = 4;
            civilian = value - killer;
            break; 
        case value >= 16 && value <= 18:
            killer = 5;
            civilian = value - killer;
            break;  
        default:
            killer = '&nbsp;&nbsp;';
            civilian = '&nbsp;&nbsp;';
    }
    wolf.innerHTML = '杀手&nbsp;&nbsp;' + killer + '&nbsp;&nbsp;人';
    footman.innerHTML = '平民&nbsp;&nbsp;' + civilian + '&nbsp;&nbsp;人';
    arrS();//更新数组arr
    return value;
}
btn2.onclick = () => {
    var num = document.getElementById("num").value;
    if(num<4 || num>19){
        if (confirm("请输入正确的玩家数量","yes","no")){
            document.getElementById("num").value = 8;
        }
    }
}
// btn2.addEventListener('click',() => {console.log(this)});