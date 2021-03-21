$('#btn1').click(e=>window.location.href = "deploy_page.html");
$('#btn2').click(e=>window.location.href = "home_page.html");
/*
如果deploy_page页面的js是sessionStorage.arr = arr，那么可以在show_id页面的js进行如下转换
var ssr = sessionStorage.arr;
var arr = ssr.split(',');//保存分配页面的杀手和平民的数据
*/
//var arr = JSON.parse(sessionStorage.arr);
arr = JSON.parse(sessionStorage.getItem("data"));
var status = 0;//保存当前查看状态,主要用于判断按钮状态
var count = 1;//保存当前查看到几号,用于显示数字
var clicks = 1;//奇数偶数判断，用于按钮状态切换,默认为1
var bt = $('#bg-title');
var bg1 = $('#bg-img1');
var bg2 = $('#bg-img2');
var vs = $('.vote-status');
var vn = $('.vote-num');
var mv = $('.main-vote');
var mb = $('.main-bg');
var fb = $('#footer-btn');

fb.on('click' , function (e) {
    switch (true) {
        case clicks%2 === 0 && status<arr.length-1://当前按钮状态是“隐藏并传递给N号”
            status++;
            bt.text(count);
            bg1.show();
            bg2.hide();
            fb.text('查看' + count + '号身份');//此文本代表case2和case3的按钮状态
            break;
        case status<arr.length-1://当前按钮状态是“查看N号身份”
            $('#img2-text').text(arr[status]);
            bg1.hide();
            bg2.show();
            fb.text('隐藏并传递给' + (++count) + '号');//此文本代表case1的按钮状态
            break;
        case status == arr.length-1://当前按钮状态是“当前按钮状态是查看N号身份”
            status++;
            $('#img2-text').text(arr[status]);
            bg1.hide();
            bg2.show();
            fb.text("法官查看");
            break;
        default://当前按钮状态是“法官查看”
            window.location.href = "judge_check_id.html";
    }
    clicks++;
});