var imgList = document.getElementById("img-list");
var nav = document.getElementById("banner-nav-list");
var banner = document.getElementById("banner");
var arr = document.getElementById("arr");
var toLeft = document.getElementById("toLeft");
var iconLeft = document.getElementsByClassName("icon-jiantou-left")[0];
var toRight = document.getElementById("toRight");
var iconRight = document.getElementsByClassName("icon-jiantou-right")[0];
var navLi = nav.children;

var timer = setInterval(autoPlay, 3000);

var index = 0;

function autoPlay() {
    if (index == 6) {
        imgList.style.left = 0;
        index = 1;
    } else {
        index++;
    }
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].className = "";
    }
    animate(imgList, {
        left: -1920 * index
    }, 20);
    navLi[index == 6 ? 0 : index].className = "active";
}
//鼠标移入banner停止轮播
banner.onmouseover = function (e) {
    display_a();


}
toLeft.onmouseover = function (e) {
    console.log(this);
    display_a();
}
toRight.onmouseover = function (e) {
    console.log(this);
    display_a();
}

function display_a() {
    clearInterval(timer);
    //显示左右按钮
    animate(iconLeft, {
        left: 44,

    }, 20);
    animate(iconRight, {
        right: 44,

    }, 20);
    iconLeft.style.color="#fff";
    iconRight.style.color="#fff";
}
//鼠标移出开启轮播
banner.onmouseout = function () {
    hidden_a()
}
toLeft.onmouseout = function () {
    hidden_a()
}
toRight.onmouseout = function () {
    hidden_a()
}

function hidden_a() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 2000);
    //隐藏左右按钮
    animate(iconLeft, {
        left: -200,
    }, 20);
    animate(iconRight, {
        right: -200,
    }, 20);
    iconLeft.style.color="rgba(255, 255, 255, 0.5)";
    iconLeft.style.color="rgba(255, 255, 255, 0.5)";
}
//左右按钮的点击 
toLeft.onclick = function () {
    if (index == 6) {
        imgList.style.left = 0;
        index = 0;
    } else if (index == 0) {
        index = 0;
    } else {
        index--;
    }
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].className = "";
    }
    animate(imgList, {
        left: -1920 * index
    }, 20);
    navLi[index].className = "active";
}
toRight.onclick = function () {
    if (index == 6) {
        imgList.style.left = 0;
        index = 1;
    } else if (index == 5) {
        index = 5;
    } else {
        index++;
    }
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].className = "";
    }
    animate(imgList, {
        left: -1920 * index
    }, 20);
    navLi[index].className = "active";
}

for (let i = 0; i < navLi.length; i++) {
    //navLi.index = i;
    navLi[i].onmouseover = function () {
        //将当前li的下标给index
        index = i;
        //使用修改后的index实现运动
        for (var j = 0; j < navLi.length; j++) {
            navLi[j].className = "";
        }
        animate(imgList, {
            left: -1920 * index
        }, 20);
        navLi[index].className = "active";
    }
}