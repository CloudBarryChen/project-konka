//获取ol的li，当li等于3的时候，第一个，第二个可点击，跳转到相应的页面
//li等于2的时候，只有首页可以跳转
/*var ol = document.querySelector('.headline');
//添加点击事件跳转到相关页面
ol.onclick = function(eve){
    var e = eve || event;
    var target = e.target || e.srcElement;
    if(target.nodeName == "LI"){
        
    }
}*/

//点击获取导航表第一个ul的li内容，添加到ol最后
/*var oul = document.getElementsByClassName("list-inline")[0];
// console.log(oul);
for(var i = 0; i < oul.length; i++){
    oul[i].onclick = function(e){
        var e = eve || event;
        var target = e.target || e.srcElement;
        if(target.nodeName == "LI"){
            console.log(target);
        }
    }
}*/

// $(function(){
//     $('.cols .figure').hover(function(){
//         $(this).find('.price').hide();
//         $(this).find('.wrapper').stop().fadeIn("slow")
//     },function(){
//       $(this).find('.price').stop().fadeIn("slow");
//       $(this).find('.wrapper').hide();
//     });
// })
 //显示 筛选状态
//  $('.gfilter-list dd').each(function(index, el) {
//     if(($(this).find('.nolimit').length)!=0){
//       if(($(this).find('.active').length)==0){
//         $(this).find('.nolimit').addClass('active');
//       }else{
//         $(this).find('.nolimit').removeClass('active');
//       }
//     }else{
//       return;
//     }
// });

$(function(){
    $(".headline").find("li").each(function(i,dom){
        if($("li").length > 3){
            $("li:eq(3)>a").removeAttr('href');//去掉a标签中的href属性  
        }
    });
    
    //点击导航表内容 把list-inline相对应的li添加到标题headline后面，并且隐藏list-inline:eq（0）
    $(".list-inline:eq(0)").find("li").on("click",function(){
        // console.log(this);
        $("dt:eq(0)").hide();
        $("dd:eq(0)").hide();
        $(".headline").append($(".headline>span").clone()).append($(this).clone());
    })
    
    //点击内容区筛选
    $(".star .btn-group a").on("click",function(){
        $(".star .btn-group a").each(function(index,el){
            // console.log(el);
            $(".star .btn-group a").removeClass("defaultBtn");
        })
        $(this).addClass("defaultBtn");
    })
    
    $.get("./js/a.json",function(data){
        // console.log(data);
        var html = "";
        $.each(data,function(index,item){
            // console.log(item);
            html += `
            <div class="cols cola">
                <div class="figure">
                    <a href="#"><img src="${item.src}" alt="" style="display: inline;"></a>
                </div>
                <h4 class="figureTitle">${item.figureTitle}</h4>
                <div class="figureColor">${item.figureColor}</div>
                <p class="price">${item.price}</p>
                <div class="cart">
                    <a href="" id=${item.id}>加入购物车</a>
                    <a href="" class="a2" id=${item.text}>立即购买</a>
                </div>
            </div>
            `
        })
        $(".row").html(html);
    })

    // $(".row").on("mouseover",".cols cola",function(){
    //     // console.log(1);
    //     $(".cols cola").animate({
    //         width: "252",
    //         height: "322",
    //         marginTop:"-2px",
            
    //     },"slow")
    // })
    
    $('.row .cols .cola').hover(function(){
        $(this).find('.price').hide();
        // .stop()停止所有在指定元素上正在运行的动画。
        // .fadeIn("slow")通过不透明度的变化来实现所有匹配元素的淡入效果，并在动画完成后可选地触发一个回调函数。

        $(this).find('.cart').stop().fadeIn("slow")
    },function(){
      $(this).find('.price').stop().fadeIn("slow");
      $(this).find('.cart').hide();
    });

})

//阴影
// $('.box.lifted').shadow('lifted');
// var row = document.getElementsByClassName("row")[0];
// // console.log(row);
// row.onmouseover = function(eve){
//     var e = eve || event;
//     var target = e.target || e.srcElement;
//     if(target.className == "cols cola"){
//         // console.log(1);
//         target.style.whidt = "252px";
//         target.style.height = "322px";
//         target.style.marginTop ="-3px";
//     }
// }

