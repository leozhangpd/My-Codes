var wolf = document.getElementById("wolf");
var footman = document.getElementById("footman");
var killer;
var civilian;
var arr = [];
var rdm ;
function sum_num(value) {
    var num = value;
    switch (true) {
        case num == 4 || num == 5:
            killer = 1;
            civilian = num-killer;
            break;
        case num >= 6 && num <= 8:
            killer = 2;
            civilian = num - killer;
            break;
        case num >= 9 && num <= 11:
            killer = 3;
            civilian = num-killer;
            break;
        case num >= 12 && num <= 15:
            killer = 4;
            civilian = num - killer;
            break; 
        case num >= 16 && num <= 18:
            killer = 5;
            civilian = num - killer;
            break;  
        default:
            killer = '&nbsp;&nbsp;';
            civilian = '&nbsp;&nbsp;';
    }
    wolf.innerHTML = '杀手&nbsp;&nbsp;' + killer + '&nbsp;&nbsp;人';
    footman.innerHTML = '平民&nbsp;&nbsp;' + civilian + '&nbsp;&nbsp;人';
}
/* for(var i = 1;i<=num;i++){
    arr.push(i);
    
}
rdm = Math.floor(Math.random() * num.length);
 */