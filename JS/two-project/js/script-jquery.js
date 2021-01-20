// "use strict"
var wolf = document.getElementById("wolf");
var footman = document.getElementById("footman");
var killer = 2;
var civilian = 6;
var arr;
var arrB; 
$('#btn1').click(e=>window.location.href = "home_page.html");
//fun = e => console.log(arguments[0]);
//function fun(e){console.log(e);}
var arrS = (function rtn() {//打乱顺序
    arr = (Array(killer)).fill('killer');
    arrB = (Array(civilian)).fill('civilian');
    arr.push.apply(arr,arrB); 
    for (let i = arr.length-1;i>=0;i--){//在谷歌、ie最新版本、edge上经过测试后发现第二个表达式不写也没问题
        let rand = ~~(Math.random() * i+1);
        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;  
    }
    sessionStorage.arr = arr;
    //console.log(arr);
    return rtn;    
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
$('#btn2').click((e) =>{
    var num = $('#num').val();
    if(num<4 || num>19){
        if (confirm("请输入正确的玩家数量","yes","no")){
            $('#num').val(8);
        } 
    }
    });

// btn2.onclick = () => {
//     var num = document.getElementById("num").value;
//     if(num<4 || num>19){
//         if (confirm("请输入正确的玩家数量","yes","no")){
//             document.getElementById("num").value = 8;
//         }
//         console.log(this.innerHTML);
//         console.log($(this));
//         console.log(this.innerHTML);
        
//     }
// }

// $('#btn2').click(
//     function (){
//         //$('#pwd').change();
//         $('input[name=lang]').prop('checked',$(this).is(':checked'))
//     }
// )
// $('[type=text]').change(function(){alert('hello')})