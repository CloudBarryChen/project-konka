$(function(){
    $("#codeX").on("mouseover mouseout","dd",function () {
        if(event.type == "mouseover"){
            //鼠标悬浮
            // alert(1);
            // console.log($(this).children(".items"));
            if($(this).children(".code")){
                $(this).children(".code").show();
            }
            
        }else if(event.type == "mouseout"){
            //鼠标离开
            if($(this).children(".code")){
                $(this).children(".code").hide();
            }
            // alert(2);
        }
    })
})