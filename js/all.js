"use strict";function draw(e){var o=$("#canvas").width(),t=$("#canvas").height(),n=document.getElementById("canvas"),i=n.getContext("2d");n.width=o,n.height=t;for(var a="A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0".split(","),s=a.length,c=0;c<=3;c++){var l=Math.floor(Math.random()*s),r=30*Math.random()*Math.PI/180,d=a[l];e[c]=d.toLowerCase();var h=20*c,u=20+8*Math.random();i.font="bold 23px 微软雅黑",i.translate(h,u),i.rotate(r),i.fillText(d,0,0),i.rotate(-r),i.translate(-h,-u)}}$(function(){$("#codeX").on("mouseover mouseout","dd",function(){"mouseover"==event.type?$(this).children(".code")&&$(this).children(".code").show():"mouseout"==event.type&&$(this).children(".code")&&$(this).children(".code").hide()})}),$(function(){var t=$("#fluid-bar").offset().top,e=$(".navs").children();console.log(e),console.log(t),$(document).on("scroll",function(e){var o=document.documentElement.scrollTop||document.body.scrollTop;console.log(o),t<o?$("#fluid-bar").css({position:"fixed",top:-t,left:632,zIndex:999}):$("#fluid-bar").css({position:"static"})}),$(".navs").on("mouseover mouseout","li",function(){"mouseover"==event.type?$(this).children(".item")&&$(this).children(".item").show():"mouseout"==event.type&&$(this).children(".item")&&$(this).children(".item").hide()}),$("#seek").on("click",function(){$(".navs").hide(),$(".sea-bar").show("slow"),$("#animateUl").show("slow")}),$("#close").on("click",function(){$(".navs").show("slow"),$(".sea-bar").hide(),$("#animateUl").hide()})}),$(document).ready(function(){var t=[];draw(t),$("#change").on("click",function(){draw(t)}),$("#ucode").on("blur",function(){var e=$("#ucode").val().toLowerCase(),o=t.join("");""==e?alert("请输入验证码！"):(e==o?alert("提交成功！"):alert("验证码错误！请重新输入！"),$(".input-val").val(""),draw(t))})});