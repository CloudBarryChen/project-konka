$(function(){
    //吸顶菜单
    var stop=$("#fluid-bar").offset().top;
    var itemArr=$(".navs").children();
    console.log(itemArr);
    console.log(stop);
    $(document).on("scroll",function(e){
    var tops = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(tops);
    if(tops>stop){
        $("#fluid-bar").css({
            position:"fixed",
            top:-stop,
            left:632,
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
            // console.log($(this).children(".items"));
            if($(this).children(".item")){
                $(this).children(".item").show();
            }
            
        }else if(event.type == "mouseout"){
            //鼠标离开
            if($(this).children(".item")){
                $(this).children(".item").hide();
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
 