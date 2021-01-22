$('#btn1').click(e=>window.location.href = "deploy_page.html");
$('#btn2').click(e=>window.location.href = "home_page.html");
/*
如果deploy_page页面的js是sessionStorage.arr = arr，那么可以在show_id页面的js进行如下转换
var ssr = sessionStorage.arr;
var arr = ssr.split(',');//保存分配页面的杀手和平民的数据
*/
//var arr = JSON.parse(sessionStorage.arr);
var arr = sessionStorage.getItem("data");
arr = JSON.parse(arr);
var status = 0;//保存当前查看状态,用于调用数组元素和判断
var count = 1;//保存当前查看到几号,用于显示数字
var clicks = 1;//奇数偶数判断，用于按钮状态切换
var bt = $('#bg-title');
var bg1 = $('#bg-img1');
var bg2 = $('#bg-img2');
var vs = $('.vote-status');
var vn = $('.vote-num');
var mv = $('.main-vote');
var mb = $('.main-bg');
var fb = $('#footer-btn');
$('#footer-btn').on('click' , function (e) {
    if(clicks%2 === 0 && status<arr.length-1){//按钮状态：隐藏并传递给n号身份
        status++;
        count++;
        bt.text(count);
        bg1.show();
        bg2.hide();
        fb.text('查看' + count + '号身份');
    }else if(status<arr.length-1){//按钮状态：查看n号身份按钮
            $('#img2-text').text(arr[status]);
            bg1.hide();
            bg2.show();
            fb.text('隐藏并传递给' + (count+1) + '号')
        }else if(status == arr.length-1){//按钮状态：和查看n号身份按钮一样
            bg1.hide();
            bg2.show();
            $('#img2-text').text(arr[status]);
            fb.text("法官查看");
            status++;
        }else if($('.main-vote')[1] === undefined){//按钮状态：法官查看按钮
            $('#main-bg').hide();
            mv.css('display','inline-block');
            $('main').css('bottom','12rem');
            for(var i=0;i<arr.length;i++){
                $('.vote-status')[i].innerHTML = arr[i];
                $('.vote-num')[i].innerHTML = i+1;
                if(i<arr.length-1){
                    mv.clone().appendTo($('main'));
                }
            }
            fb.text("开始游戏"); 
        } else {window.location.href = "https://www.baidu.com"};
        clicks++;    
});