$(function(){
    //吸顶菜单
    var stop=$("#fluid-bar").offset().top;
    var ljj_itemArr=$(".navs").children();
    //console.log(ljj_itemArr);
    //console.log(stop);
    $(document).on("scroll",function(e){
    var tops = document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(tops);
    var x = ($(window).attr('innerWidth')-1140)/2+((1920-1366+8));
    console.log(x);
    if(tops>stop){
        $("#fluid-bar").css({
            position:"fixed",
            top:-stop,
            left:x,
            zIndex:999
        })
    }
    else{
        $("#fluid-bar").css({
            position:"static"
        
        })
    }
    })
    //鼠标经过出现子菜单
    $(".navs").on("mouseover mouseout","li",function () {
        if(event.type == "mouseover"){
            //鼠标悬浮
            // console.log($(this).children(".ljj_items"));
            if($(this).children(".ljj_item")){
                $(this).children(".ljj_item").show();
            }
            
        }else if(event.type == "mouseout"){
            //鼠标离开
            if($(this).children(".ljj_item")){
                $(this).children(".ljj_item").hide();
            }
        }
    })
    //鼠标点击搜索图标时出现搜索框
    $("#seek").on("click",function(){
        $(".navs").hide();
        $(".sea-bar").show("slow");
        $("#animateUl").show("slow");
    })
    $("#close").on("click",function(){
        $(".navs").show("slow");
        $(".sea-bar").hide();
        $("#animateUl").hide();
    })
});
 