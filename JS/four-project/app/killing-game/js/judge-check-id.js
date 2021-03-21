$('#btn1').click(e=>window.location.href = "show_id.html");
$('#btn2').click(e=>window.location.href = "home_page.html");
arr = JSON.parse(sessionStorage.getItem("data"));

// $('main').css('bottom','12rem');
for(let i=0;i<arr.length;i++){
    $('.vote-status')[i].innerHTML = arr[i];
    $('.vote-num')[i].innerHTML = i+1;
    if(i<arr.length-1){
        $('.main-vote:first-child').clone().appendTo($('main'));
    }
}
$('#footer-btn').on('click' , function (e) {
    window.location.href = "judge_playscript.html";
    sessionStorage.setItem('switchHtml','1');
});
if(sessionStorage.getItem("switchHtml") == 1){
    $('#footer-btn').text("返回");
}

// function btns(e) {
//     //console.log(e.target);
    
//     if(e.target == $('.footer-btn')[0]){
//         console.log(123);
//     }else{console.log(e.target);
//     }
// }

// $('.footer-btn').on('click' , btns);
// sessionStorage.setItem('tr','123');
// switch(456){
//     case sessionStorage.getItem('tr') == 123:
//         console.log(123);
//     case 456:
//         console.log(456);
//     case  789 == 789:
//         console.log(789);
        
// }