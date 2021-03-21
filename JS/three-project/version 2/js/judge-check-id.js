$('#btn1').click(e=>window.location.href = "show_id.html");
$('#btn2').click(e=>window.location.href = "home_page.html");
arr = JSON.parse(sessionStorage.getItem("data"));

$('main').css('bottom','12rem');
for(let i=0;i<arr.length;i++){
    $('.vote-status')[i].innerHTML = arr[i];
    $('.vote-num')[i].innerHTML = i+1;
    if(i<arr.length-1){
        $('.main-vote:first-child').clone().appendTo($('main'));
    }
}
$('#footer-btn').on('click' , function (e) {window.location.href = "https://www.baidu.com";});