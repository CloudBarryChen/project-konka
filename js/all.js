"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function draw(e){var o=$("#canvas").width(),n=$("#canvas").height(),t=document.getElementById("canvas"),a=t.getContext("2d");t.width=o,t.height=n;for(var s="A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0".split(","),r=s.length,i=0;i<=3;i++){var l=Math.floor(Math.random()*r),c=30*Math.random()*Math.PI/180,d=s[l];e[i]=d.toLowerCase();var u=20*i,h=20+8*Math.random();a.font="bold 23px 微软雅黑",a.translate(u,h),a.rotate(c),a.fillText(d,0,0),a.rotate(-c),a.translate(-u,-h)}}$(function(){$("#codeX").on("mouseover mouseout","dd",function(){"mouseover"==event.type?$(this).children(".code")&&$(this).children(".code").show():"mouseout"==event.type&&$(this).children(".code")&&$(this).children(".code").hide()})}),$(function(){var n=$("#fluid-bar").offset().top,e=$(".navs").children();console.log(e),console.log(n),$(document).on("scroll",function(e){var o=document.documentElement.scrollTop||document.body.scrollTop;console.log(o),n<o?$("#fluid-bar").css({position:"fixed",top:-n,left:632,zIndex:999}):$("#fluid-bar").css({position:"static"})}),$(".navs").on("mouseover mouseout","li",function(){"mouseover"==event.type?$(this).children(".item")&&$(this).children(".item").show():"mouseout"==event.type&&$(this).children(".item")&&$(this).children(".item").hide()}),$("#seek").on("click",function(){$(".navs").hide(),$(".sea-bar").show("slow"),$("#animateUl").show("slow")}),$("#close").on("click",function(){$(".navs").show("slow"),$(".sea-bar").hide(),$("#animateUl").hide()})}),$(document).ready(function(){var n=[];draw(n);var t=!1;$("#change").on("click",function(){draw(n)}),$("#ucode").on("blur",function(){var e=$("#ucode").val().toLowerCase(),o=n.join("");""==e?alert("请输入验证码!"):t=e==o||(alert("验证码错误！请重新输入！"),$(".input-val").val(""),draw(n),!1)}),$("#registers").on("click",function(){console.log(t),""!=$("#uname").val()&&""!=$("#password").val()&&!0===t&&addUser($("#uname").val(),$("#password").val())}),$("#logins").on("click",function(){console.log(t),""!=$("#uname").val()&&""!=$("#password").val()&&!0===t&&checkLogin($("#uname").val(),$("#password").val())})});var User=function e(o,n){_classCallCheck(this,e),this.username=o,this.pwd=n};function addUser(e,o){for(var n=JSON.parse(window.localStorage.getItem("user")||"[]"),t=0;t<n.length;t++)if(n[t].username==e)return void alert("该用户已存在!");var a=new User(e,o);n.push(a),window.localStorage.setItem("user",JSON.stringify(n))}function checkLogin(e,o){for(var n=JSON.parse(window.localStorage.getItem("user")||"[]"),t=0;t<n.length;t++){if(n[t].username!=e||n[t].pwd!=o)return void alert("用户名或者密码错误!");alert("登录成功")}}