/**
 * 获取元素id
 */
function $id(id) {
    return document.getElementById(id);
}

/**
 * 获取元素class(返回的是一个数组)
 */
function $class(cla) {
    return document.getElementsByClassName(cla);
}

/**
 * 获取元素标签(返回的是一个数组)
 */
function $tag(tag) {
    return document.getElementsByTagName(tag);
}

/**
 * 清除input文本框内容
 */
function clearInput(content) {
    return content.value = '';
}

/**
 * 判断一个数是否是素数
 */
function isPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (var i = 2; i <= num - 1; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

/**
 * 计算一个数的阶乘
 */
function factorial(num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

/**
 * 冒泡排序
 */
function bubble(arr, arg) {
    var temp = 0;
    if (arg == 1) { //从小到大排序
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    if (arg == 2) { //从大到小排序
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    return arr;
}

/**
 * 保存数据到本地(可定义不同名字的存储器，互不影响)
 */
function saveData(data, storName) {
    var str = JSON.stringify(data);
    localStorage.setItem(storName, str);
    return str;
}

/**
 * 读取本地存储数据
 */
function readData(storName) {
    if (localStorage.getItem(storName) == undefined) {
        return;
    }
    var str = localStorage.getItem(storName);
    var obj = JSON.parse(str);
    return obj;
}

/**
 * 数组随机排序（改变原数组）
 */
function ranSort(arr) {
    arr.sort(function () {
        return Math.random() - 0.5;
    })
}

/**
 * 数组去重(原始方法)
 */
function noRepeat(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/**
 * 获取min-max之间的随机数
 */
function getRand(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

/**
 * 随机获取六位十六进制颜色值
 */
function getColor() {
    var str = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var rand = getRand(0, 15);
        color += str.charAt(rand);
    }
    return color;
}

/**
 * 获取随机验证码
 */
function getVeriCode(num) {
    var veriCode = "";
    //yxm = 数字字母
    //数字字母从ASCII码表来
    for (var i = 0; i < num; i++) {
        var rand = getRand(48, 122);
        //排除不需要的 字符 
        if ((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)) {
            i--;
        } else {
            veriCode += String.fromCharCode(rand);
        }
    }
    return veriCode;
}

/**
 * 自定义本地化时间
 */
function dateToString(date) {
    var str = "";
    var week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    //2019年6月15日 10:44:23 星期六
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    var w = date.getDay(); //0-6 ["星期天","星期一"]

    //str += y + "年" + add0(m) + "月" + add0(d) + "日 ";
    //str += add0(h) + ":" + add0(mi) + ":" + add0(s) + " ";
    //str += week[w];
    //str = `${y}年${add0(m)}月${add0(d)}日 ${add0(h)}:${add0(mi)}:${add0(s)} ${week[w]}`;//字符串模板不兼容IE8
    str = y + "年" + add0(m) + "月" + add0(d) + "日" + add0(h) + ":" + add0(mi) + ":" + add0(s) + week[w];
    return str;

    function add0(num) { //加零
        return num < 10 ? "0" + num : num;
    }

}


/**
 * 获取两个时间时间差秒数
 */
function getDiffTime(startTime, endTime) {
    return (endTime.getTime() - startTime.getTime()) / 1000;
}

/**
 * 数组转化为对象（前提是数组以键值对形式出现）
 */
function arrToObj(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            obj[arr[i]] = arr[i + 1];
        }
    }
    return obj;
}

/**
 * console.log()封装
 */
function clog(item) {
    return console.log(item);
}

/**
 * 角度转弧度
 */
function angToArc(angle) {
    return 2 * Math.PI / 360 * angle;
}

/**
 * 弧度转角度
 */
function arcToAng(arc) {
    return arc / (2 * Math.PI) * 360;
}

/**
 * 重力加速度，自由落体运动
 */
function accG() { //这里假设obj为页面某个元素

    //clearInterval(obj.timer);
    /*  if (obj.beClicked == undefined || obj.beClicked == false) {
         obj.beClicked = true;
         var t = 1 / 60; //运动时间，以秒计
         var fps = 1000 / 60;
         var g = 1000; //假设重力加速度g值为1000
         var maxH = window.innerHeight; //窗口最大高度
         var y = parseInt(obj.offsetTop);
         var h = parseInt(obj.clientHeight);
         obj.style.position = "absolute";

         obj.i = 1; //计数，乘以定时器间隔获得逝去时间。
         obj.timer = setInterval(function () {
             var s = g * Math.pow(t * obj.i, 2) / 2; //s = 1/2 * g * t * t;(自由落体运动，初始速度为0)
             if ((s + y) > (maxH + h)) {
                 obj.parentNode.removeChild(obj); //下落到窗口边缘移除节点
                 //obj.style.top =  y + "px";//下落到窗口边缘恢复节点
                 //obj.style.position = "";
                 clearInterval(obj.timer);
             } else {
                 obj.style.top = Math.ceil(s) + y + "px";
                 //console.log(obj.style.top);
                 obj.i++;
             }
         }, fps);
     } */
    document.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        //accG(target);
        if (target.nodeName != "HTML" && target.nodeName != "BODY") {
            var obj = target;
            //clearInterval(obj.timer);
            if (obj.beClicked == undefined || obj.beClicked == false) {
                obj.beClicked = true;
                var t = 1 / 60; //运动时间，以秒计
                var fps = 1000 / 60;
                var g = 1000; //假设重力加速度g值为1000
                var maxH = window.innerHeight; //窗口最大高度
                var y = parseInt(obj.offsetTop);
                var h = parseInt(obj.clientHeight);
                obj.style.position = "absolute";

                obj.i = 1; //计数，乘以定时器间隔获得逝去时间。
                obj.timer = setInterval(function () {
                    var s = g * Math.pow(t * obj.i, 2) / 2; //s = 1/2 * g * t * t;(自由落体运动，初始速度为0)
                    if ((s + y) > (maxH + h)) {
                        obj.parentNode.removeChild(obj); //下落到窗口边缘移除节点
                        //obj.style.top =  y + "px";//下落到窗口边缘恢复节点
                        //obj.style.position = "";
                        clearInterval(obj.timer);
                    } else {
                        obj.style.top = Math.ceil(s) + y + "px";
                        //console.log(obj.style.top);
                        obj.i++;
                    }
                }, fps);
            }
        }
    }
}


/**
 * IE8兼容写法，鼠标事件
 */
function getButton(eve) {
    //如何判断是ie8浏览器
    //根据事件对象来判断
    /*   if (eve) {
          //console.log(eve);
          return eve.button;
      } else {
          //IE8
          console.log(eve);
          var button = window.event.button;
          switch (button) {
              case 1:
                  return 0;
              case 4:
                  return 1;
              case 2:
                  return 2;
          }
      } */

    //try catch写法
    try {
        return eve.button
    } catch (err) {
        var button = window.event.button;
        switch (button) {
            case 1:
                return 0;
            case 4:
                return 1;
            case 2:
                return 2;
        }
    }
}

/**
 * IE8兼容写法，事件监听
 */
function addEventLis(ele, event, callback) {
    if (ele.addEventListener) { //先判断IE8是否支持该方法
        ele.addEventListener(event, callback);
    } else {
        ele.attachEvent("on" + event, callback);
    }
}

/**
 * IE8兼容写法，阻止默认事件
 */
function preventDefEve(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

}

/**
 * IE8兼容写法，阻止事件冒泡
 */
function stopPP(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

/**
 * IE8兼容写法，去除字符串两边空格
 */
function myTrim(str) {
    try {
        return str.trim(); //ie8不支持trim()方法，这个方法只能去除两边空格，无法字符间空格
    } catch (err) {
        var reg = /\s/g;
        return str.replace(reg, ''); //这个方法能去除所有空格，包括字符间空格
    }
}

/**
 * 数组返回一个set集合，可用Array.from(set)转换成真数组
 */
function mySet(arr) {
    var set = new Set();
    for (var i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    return set;
}

/**
 * 获取元素不带单位的属性值,IE8兼容写法
 */
function getStyle(ele, attr) {
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}

/**
 * 元素运动 //链式调用，多属性匀减速运动，可以指定运动结束时间。百分比数据要带引号
 */
function animation(ele, obj, spendTime, callback) { //元素，属性，目标值,到达目标值所花时间(毫秒)
    clearInterval(ele.timer);
    // if (!ele.status) {
    //     ele.status = true;
    var i = 0;
    var t = 1 / 60;
    var fps = 1000 / 60;
    //var current = getStyle(ele, attr);
    var current = {};
    var obj2 = {};
    //console.log(obj);
    for (attr in obj) {
        if (attr === "opacity") {
            current[attr] = getStyle(ele, attr) * 100;
        } else {
            if (/%/.test(obj[attr])) {
                current[attr] = Math.ceil(parseFloat(getStyle(ele, attr))) / 10;
                //console.log(current[attr]);
            } else {
                current[attr] = Math.ceil(parseFloat(getStyle(ele, attr)));
            }
        }
        obj2[attr] = Math.ceil(parseFloat(obj[attr]));
    }
    //console.log(obj2);
    ele.timer = setInterval(function () {
        i++;
        var T = i * t;
        var flag = true;
        for (attr in obj) {
            var v0 = 2 * (obj2[attr] - current[attr]) / spendTime * 1000;
            var a = -2 * (obj2[attr] - current[attr]) / spendTime * 1000 / spendTime * 1000;
            //console.log('初速度', v0);
            //console.log("加速度", a);
            var s = v0 * T + 1 / 2 * a * T * T; //匀变速公式
            console.log("s", s);
            // if (s < obj2[attr] - current[attr]) {
            if (Math.abs(s) < Math.abs(obj2[attr] - current[attr])) {
                if (attr === "opacity") {
                    ele.style[attr] = (s + current[attr]) / 100;
                    //console.log(ele.style[attr]);
                } else {
                    if (/%/.test(obj[attr])) {
                        //console.log("s",s);
                        //console.log('current',current[attr]);
                        ele.style[attr] = s + current[attr] + '%';
                        //console.log(ele.style[attr]);
                    } else if (attr === "zIndex") {
                        ele.style[attr] = obj2[attr];

                        //console.log(obj[attr]);
                    } else {
                        ele.style[attr] = s + current[attr] + 'px';
                    }
                }
                flag = false;
            } else {
                if (attr === "opacity") {
                    ele.style[attr] = obj2[attr] / 100;
                } else {
                    if (/%/.test(obj[attr])) {
                        ele.style[attr] = obj2[attr] + '%';
                    } else if (attr === "zIndex") {
                        ele.style[attr] = obj2[attr];
                    } else {
                        ele.style[attr] = obj2[attr] + 'px';

                    }

                }
                //console.log("---耗费时间---", T);
                //console.log("末速度", v0 + a * T);
            }
        }
        if (flag) {
            clearInterval(ele.timer);
            //console.log("timer!",ele.timer);
            //ele.status = false;
            if (callback) {
                callback();
            }

        }

    }, fps);
    // }
}

/**
 * 8.0链式调用
 */
function animate(ele, obj, speedTime, callBack) {
    //var callBack = function(){alert("o了")};
    clearInterval(ele.timer);
    ele.i = 0;
    ele.timer = setInterval(function () {
        ele.i++;
        var flag = true; //表示所有的属性都到达 了目标值
        for (var attr in obj) {
            if (attr != "zIndex") {
                var current = 0;
                if (attr == "opacity") {
                    current = param(ele, attr) * 100;
                } else {
                    current = Math.ceil(parseFloat(param(ele, attr)));
                }
                var speed = (obj[attr] - current) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (obj[attr] != current) {
                    flag = false;
                }
            }
            if (attr == "opacity") {
                ele.style[attr] = (current + speed) / 100;
            } else if (attr == "zIndex") {
                ele.style[attr] = obj[attr];
            } else {
                ele.style[attr] = current + speed + "px";
            }
        }
        if (flag) { //都到达目标值 了
            clearInterval(ele.timer);
            //运动完毕后这里开启下一个程序的执行
            ele.i--;
            console.log('耗时', speedTime * ele.i, "ms");
            if (callBack) {
                callBack();
            }
        }
    }, speedTime);
}

/**
 * 通过对应的属性获取对应属性的样式值
 */
function param(ele, attr) {
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}

/**
 * 封装浏览器兼容函数获取界面可视区域
 */
function getClientSize() {
    return {
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
    }
}

/**
 * 面向对象，拖拽封装
 */
function Drag(obj) {
    this.obj = obj;
    this.maxWidth = window.innerWidth;
    this.maxHeight = window.innerHeight;
    if (this.obj.style.position !== "absolute") this.obj.style.position = "absolute";
    return this;
}
Drag.prototype.init = function () {
    this.mousedown();
    this.mouseup();
}
Drag.prototype.mousedown = function () {
    var _this = this;
    this.obj.onmousedown = function (e) {
        var self = this;
        var e = e || event;
        var offsetX = e.offsetX || e.layerX;
        var offsetY = e.offsetY || e.layerY;
        document.onmousemove = function (e) {
            var e = e || event;
            var x = e.pageX - offsetX;
            var y = e.pageY - offsetY;
            //边界处理
            x < 0 ? x = 0 : x;
            x > _this.maxWidth - self.offsetWidth ? x = _this.maxWidth - self.offsetWidth : x;
            y < 0 ? y = 0 : y;
            y > _this.maxHeight - self.offsetHeight ? y = _this.maxHeight - self.offsetHeight : y;
            self.style.left = x + 'px';
            self.style.top = y + 'px';
            //console.log('x', x, 'y', y);
            //console.log('offsetX', e.offsetX, 'offsetY', e.offsetY);
            //拖拽时去掉文字内容选中兼容
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection
                .empty();
        }
    };
}
Drag.prototype.mouseup = function () {
    document.onmouseup = function () {
        this.onmousemove = null;
    }
}

/**
 * 面向对象，class构造函数封装完美轮播图
 */
class Slideshow {
    constructor(banner, imgList, navList, arrow, left, right) {
        this.banner = banner;
        this.imgList = imgList;
        this.navList = navList;
        this.arrow = arrow;
        this.left = left;
        this.right = right;
        this.index = 0;
        this.timer = 0;
    }
    start() {
        var self = this;
        this.timer = setInterval(function () {
            self.indexCheck();
            self.getMove();
            self.autoNav();
        }, 1000)
    }
    init() {
        var lis = this.navList.children;
        var self = this;
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                self.index = i;
                self.change();
            }
            lis[i].onmouseover = function () {
                self.index = i;
                self.change();
            }
        }
        this.mouseover();
        this.mouseout();
        this.leftClick();
        this.rightClick();
        this.start();
    }
    change() {
        if (this.index > 3) {
            this.index = 3;
        }
        if (this.index < 0) {
            this.index = 0;
        }
        this.getMove();
        this.autoNav();
    }
    autoNav() {
        var lis = this.navList.children;
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lis[this.index == 4 ? 0 : this.index].className = "active";
    }
    mouseover() {
        var self = this;
        this.banner.onmouseover = function () {
            clearInterval(self.timer);
            animate(self.arrow, {
                opacity: 100
            }, 20);
            self.arrow.style.cursor = "pointer";
        }
    }
    mouseout() {
        var self = this;
        this.banner.onmouseout = function () {
            animate(self.arrow, {
                opacity: 0
            }, 20);
            self.start();
        }
    }
    leftClick() {
        var self = this;
        this.left.onclick = function () {
            self.index--;
            self.change();
        }
    }
    rightClick() {
        var self = this;
        this.right.onclick = function () {
            self.index++;
            self.change();
        }
    }
    indexCheck() {
        if (this.index == 4) {
            this.imgList.style.left = 0;
            this.index = 1;
        } else {
            this.index++;
        }
    }
    getMove() {
        animate(this.imgList, {
            left: -810 * this.index
        }, 20);
    }
}