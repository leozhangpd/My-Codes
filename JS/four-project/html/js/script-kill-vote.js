// var test = ['杀手','平民','平民','平民']
// sessionStorage.setItem('data',JSON.stringify(test));
/*全局*/
var arr = JSON.parse(sessionStorage.getItem("data"));
var isPlayersArr = JSON.parse(sessionStorage.getItem('playersArr'));//一开始没有这个属性就引用是正常的，当杀人页面的确定按钮激活后，才会有这个属性
var playersArr = [];//存放玩家们。放在全局是为了让杀人投票页面和法官台本页面都能用到此变量
var saveResult;
if(isPlayersArr){//第二次加载时会运行此代码，更新playerArr变量，以保证playersArr变量的数据可以及时的反馈给下面的代码运行
    playersArr = isPlayersArr;
    saveResult = JSON.parse(sessionStorage.getItem('saveResult'));
}
function noLoop(value) {//该函数用于只运行一次性的判断语句
    if (sessionStorage.getItem('noLoop') != 0) {
        sessionStorage.setItem('noLoop', '1');//这个需要在游戏完全结束后，重置一下，否则再重新开始游戏，上面的if语句不执行，则数据会出错。
        sessionStorage.setItem('noLoop1', '1');//这个需要在游戏完全结束后，重置一下，否则再重新开始游戏，上面的if语句不执行，则数据会出错。
        sessionStorage.setItem('noLoop2', '1');//这个需要在游戏完全结束后，重置一下，否则再重新开始游戏，上面的if语句不执行，则数据会出错。
        sessionStorage.setItem('noLoop3', '1');//这个需要在游戏完全结束后，重置一下，否则再重新开始游戏，上面的if语句不执行，则数据会出错。
    }
    switch (value) {//0、2、4是停止的意思，1、3、5是调用的意思
        case 0:
            sessionStorage.setItem('noLoop', '0');
        case 1:
            return sessionStorage.getItem('noLoop');
        case 2:
            sessionStorage.setItem('noLoop1', '0');
        case 3:
            return sessionStorage.getItem('noLoop1');
        case 4:
            sessionStorage.setItem('noLoop2', '0');
        case 5:
            return sessionStorage.getItem('noLoop2');
        case 6:
            sessionStorage.setItem('noLoop3', '0');
        case 7:
            return sessionStorage.getItem('noLoop3');
    }
}
function btn(value){
    if(value == 1){
        $('#btn1').on('click',function(){
            window.location.href = "judge_check_id.html";
        });
    }
    $('#btn2').on('click',function(){
        if(confirm("结束本轮游戏吗","确定","取消")){
            sessionStorage.clear();
            window.location.href = "home_page.html";
        }
    });
}
/*杀人和投票页面的执行代码*/
if($('title').text() === "杀人或投死") {//先做判断，是否为杀人页面或投票页面，true的话，则执行
    btn();
    if(sessionStorage.getItem('playersVote') == 4){//用第四个按钮的playersVote来判断
        $('#title1').text('投死');
        $('.header-msg-2').text('发言讨论结束，请大家投票');
        $('header-msg>span').text('点击投票人数最多的人的头像');
        sessionStorage.setItem('playersVote',0);//重置，否则页面的三个元素的内容将显示不正确
    }else{$('#title1').text('杀人');}//这段代码少是因为页面上有现成的节点，所以不用改
    for (let i = 0; i < arr.length; i++) {
        $('.vote-status')[i].innerHTML = arr[i];
        $('.vote-num')[i].innerHTML = i + 1;
        if (i < arr.length - 1) {
            $('.main-vote:first-child').clone().appendTo($('main'));
        }
        if (noLoop(1) == 1) {//开始创建玩家对象，只能执行一次，如果多次执行，则停止执行if语句
            var player = { status: 1, num: i + 1,id:arr[i] }//status:1表示活着，num表示身份牌的号数，id表示名称
            playersArr[i] = player;//按顺序把每个玩家放进玩家组里，每个下标代表了玩家的身份
        }
    }
    if (isPlayersArr) {//这个是为了加载杀人或投死页面后，用css样式来更新杀人页面中各个身份牌的存活情况
        playersArr.map(function (value, key) {
            if (value.status == 0) {
                $('.main-vote')[key].style = 'background-color:#83b09a'//显示被杀的玩家
            }
        })
    }
    noLoop(0);
    var currentTarget;
    $('.main-vote').on('click', function (e) {currentTarget = e.currentTarget;})//保存当前触发的节点
    $('#footer-btn').on('click', function (e) {//确定按钮
        $('.main-vote').map(function (key, value) {
            //playersArr[key].id = value.childNodes[1].textContent;//给玩家对象增加一个状态，为名称,引用的是.vote-status上的节点
            if (value == currentTarget) {//通过当前选定的身份牌来定位相应的player对象，并同步存活状态
                playersArr[key].status = 0;
                sessionStorage.setItem('playersArr', JSON.stringify(playersArr))//把更新好的player对象重新传入sessionStorage内。注意，这是第一次设置此属性
                /*为结果页面提供每天白天黑夜的死亡数据*/
                let arr = [];//存放被杀玩家的中转变量
                arr.push(playersArr[key]);
                if (noLoop(3) == 1) {
                    sessionStorage.setItem('saveResult', JSON.stringify(arr));
                    noLoop(2);
                }
                saveResult = JSON.parse(sessionStorage.getItem('saveResult'));
                if (saveResult[saveResult.length-1].num != arr[0].num) {
                    saveResult.push(arr[0]);
                    sessionStorage.setItem('saveResult', JSON.stringify(saveResult));//在游戏结果页面会调用这个数据来显示白天和黑夜被杀玩家
                }
            }
        });
        window.location.href = 'judge_playscript.html';
    })
}

/*法官台本页面的执行代码*/
if($('title').text() === "法官台本") {//先做判断，是否为法官台本页面，true的话，则执行
    btn(1);
    var dayNum = 0;
    function convertToChinese(num){//阿拉伯数字转换成相应的汉字数字，是为了显示天数
        var N = [
                    "一", "二", "三", "四", "五", "六", "七", "八", "九"
                ];
        var str = num.toString();
        var len = num.toString().length;
        var C_Num = [];
        for(var i = 0; i < len; i++){
            C_Num.push(N[str.charAt(i)]);//数组调用时，[]里面可以放字符串化的数字，因为可以自动转换成数字
        }
        return C_Num.join('');
    }
    function DaysStatus() {//每天的状态变化，包含天数和一天内的4个步骤的状态
        var killerLiveCount = 0;
        var civilianLiveCount = 0;
        if (noLoop(5) == 1) {
            sessionStorage.setItem('killerLiveCount', JSON.stringify(killerLiveCount));//给结果页面的剩余人数提供数据
            sessionStorage.setItem('civilianLiveCount', JSON.stringify(civilianLiveCount));//给结果页面的剩余人数提供数据
            noLoop(4);
        }
        var isDayNum = JSON.parse(sessionStorage.getItem("dayNum"));//记录天数,用作判断,应该先判断完某一阵营输了或经历了步骤一和四，再判断天数
        if(isDayNum){dayNum = isDayNum;}//防止dayNum变量重置，否则会导致该页面只有第一天和第二天的节点，没有之后几天的节点
        //var isDayNum = 5//测试用
        if(isDayNum > 0){//由于该if语句内的代码段中的一些变量必须等杀人或投死页面运行后（设置sessionStorage的playersArr属性后）才能正常加载，所以在未点击按钮四前是禁止的
            for (var i = 0; i < arr.length; i++) {//每次重新加载js时，变量会重置，所以利用for语句重新统计存活数量。
                if (playersArr[i].id === "杀手" && playersArr[i].status == 1) {//杀手的存活人数
                    killerLiveCount++;
                };
                if (playersArr[i].id === "平民" && playersArr[i].status == 1) {//平民存活人数
                    civilianLiveCount++;
                };
            }
            sessionStorage.setItem('killerLiveCount', JSON.stringify(killerLiveCount));//把统计完的变量重新添加到该属性
            sessionStorage.setItem('civilianLiveCount', JSON.stringify(civilianLiveCount));//把统计完的变量重新添加到该属性
            if (killerLiveCount === 0) {//判断杀手人数为0时，跳转到结果页面，显示平民赢
                window.location.href = "result.html";
            } else if (killerLiveCount >= civilianLiveCount) {//判断杀手人数大于等于平民人数时，跳转到结果页面，显示平民赢
                window.location.href = "result.html";
            } else if (isDayNum > 0) {//每次进入法官台本页面后判断天数是否大于等于1，如果是true的话，渲染下一天的节点
                for (var i = 0; i < isDayNum; i++) {
                    var md = $('.main-days')[i];
                    $(md).clone().appendTo($('main'));
                    $('.days-title')[i+1].innerHTML =  "第" + convertToChinese(i + 1) + "天";
                    $('.days-content')[0].remove();//这行代码是从第一天开始修改的，下面两行代码是从第二天开始增加的，节点不一样，则下标也不一样，所以不会隐藏最后一天的元素
                }
            }
        }
    }
/*下面四个sessionStorage的属性是一天的四个步骤状态，为0表示未执行，为1表示执行*/
    DaysStatus.prototype.set = function (num) {
        switch (num) {//按钮触发后，样式产生变化和给不同按钮添加状态
            case 1:
                sessionStorage.setItem("kill", 1);//定义按钮状态，用于刷新页面后固定已触发的按钮1样式
                break;
            case 2:
                //sessionStorage.setItem("upDeadSpeak", 2);//定义按钮状态，用于刷新页面后固定已触发的按钮2样式
                $('.btns-content')[1].style = "background-color:grey";
                $('.btns-arrow')[1].style = "border-color: transparent grey transparent transparent;";
                break;
            case 3:
                //sessionStorage.setItem("playersSpeak", 3);//定义按钮状态，用于刷新页面后固定已触发的按钮3样式
                $('.btns-content')[2].style = "background-color:grey";
                $('.btns-arrow')[2].style = "border-color: transparent grey transparent transparent;";
                break;
            case 4:
                sessionStorage.setItem("playersVote", 4);//定义按钮状态，用于刷新页面后固定已触发的按钮4样式和其它用途，比如判断杀人投票页面的标题内容输出等
                sessionStorage.setItem("dayNum", JSON.stringify(++dayNum));//每次点击这个按钮后，就增加天数，如果某方阵营输了就用不到了，如果还在博弈，则用这个来渲染下一天的节点
                break;
        }
    }
    DaysStatus.prototype.reset = function (num) {//重置按钮状态
        sessionStorage.setItem("kill", 0);
        //sessionStorage.setItem("upDeadSpeak", 0);
        //sessionStorage.setItem("playersSpeak", 0);
        //sessionStorage.setItem("playersVote", 0);
        //sessionStorage.setItem("dayNum", 0);
    }

    var daysStatus = new DaysStatus();//new会运行函数，所以就不单独在调用该函数了
    if (sessionStorage.getItem('kill') == 1) {//刷新页面后，会检查是否更新更新按钮背景颜色，至于为什么只应用第一个按钮，是因为其它三个按钮的样式变化都是在当前页面操作的，不存在重新加载，也就不需要用session来记忆了
        $('.btns-content')[0].style = "background-color:grey";
        $('.btns-arrow')[0].style = "border-color: transparent grey transparent transparent;";
        $('#info').text(saveResult[saveResult.length-1].num + '号被杀手杀死，真实身份是' + saveResult[saveResult.length-1].id);
    }else{$('#info').css('display','none')};
    // if(isPlayersArr){
    //     $('#info').text(saveResult[saveResult.length-1].num + '号被杀手杀死，真实身份是' + saveResult[saveResult.length-1].id);
    // }else{$('#info').css('display','none')}
    var isbtn = 0;
    if(sessionStorage.getItem('isbtn') == 1){isbtn = sessionStorage.getItem('isbtn')};//用作判断是否重新赋值isbtn变量，true的话，下面的代码中的if语句就用得到变量了
    function isbtns(){//用来更新isbtn变量,用于判断是否按顺序点击按钮
        isbtn = sessionStorage.getItem('isbtn');
        isbtn++;
        sessionStorage.setItem('isbtn',isbtn);
    }
    function btns(e) {//数组内有四个按钮节点
        switch (true) {
            case e.currentTarget == $('.btns')[0]://判断当前点击的按钮节点是否为第一个按钮
                if(isbtn == 0){
                    daysStatus.set(1);
                    isbtn++;
                    sessionStorage.setItem('isbtn',isbtn);//必须在这里第一次赋值，否则之后 sessionStorage中的isbtn属性将无法使用
                    //daysStatus.set(2)//触发第一个状态
                    window.location.href = "kill-vote.html";
                }else{alert("请按顺序操作")};
                break;
            case e.currentTarget == $('.btns')[1]://判断当前点击的按钮节点是否为第二个按钮
                if(sessionStorage.getItem('isbtn') == 1){
                    isbtns();
                    daysStatus.set(2)//触发第二个状态
                }else{alert("请按顺序操作")};
                break;
            case e.currentTarget == $('.btns')[2]://判断当前点击的按钮节点是否为第三个按钮
                if(sessionStorage.getItem('isbtn') == 2){
                    isbtns();
                    daysStatus.set(3)//触发第三个状态
                }else{alert("请按顺序操作")};
                break;
            case e.currentTarget == $('.btns')[3]://判断当前点击的按钮节点是否为第四个按钮
                if(sessionStorage.getItem('isbtn') == 3){
                    //isbtns();
                    daysStatus.set(4)//触发第四个状态
                daysStatus.reset();
                window.location.href = "kill-vote.html";
                }else{alert("请按顺序操作")};
                break;
        }
    }

    $('.btns').on('click', btns);//当点击某个按钮时，event对象会传入btns函数的形参
    $('#footer-btn-1').on('click',e=>window.location.href = "judge_check_id.html");
}

/*游戏结果页面*/
if ($('title').text() === "游戏结果") {
//先做判断，是否为游戏结果页面，true的话，则执行
    var dayNum = JSON.parse(sessionStorage.getItem("dayNum"));
    $('.kill-num').text("杀手" + JSON.parse(sessionStorage.getItem('killerLiveCount')) + "人");//剩余杀手人数
    $('.civilian-num').text("平民" + JSON.parse(sessionStorage.getItem('civilianLiveCount')) + "人");//剩余平民人数
    for (var i = 0; i < dayNum; i++) {
        if (i < dayNum - 1) {$('.main-list:first-child').clone().appendTo($('main'));}//判断是否有两天以上，true则增加节点，由于页面有现成的节点所以要减一天，天数才正常
        $('.days-title')[i].innerHTML = "第" + (i+1) + "天";
        // $('black-num')[i].innerHTML = saveResult[i].num;
        // $('black-id')[i].innerHTML = saveResult[i].id;
        $('.black-status')[i].innerHTML = "晚上：" + saveResult[i*2].num + "号被杀手杀死，" + saveResult[i*2].num + "号是" + saveResult[i*2].id;
        // $('white-num')[i + 1].innerHTML = saveResult[i + 1].num;
        // $('white-id')[i + 1].innerHTML = saveResult[i + 1].id;
        $('.white-status')[i].innerHTML = "白天：" + saveResult[i*2+1].num + "号被全民投票投死，" + saveResult[i*2+1].num + "号是" + saveResult[i*2+1].id;
    }
    $('.footer-button').on('click', function () {
        sessionStorage.clear();
        window.location.href = "home_page.html";
    });
}