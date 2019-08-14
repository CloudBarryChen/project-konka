
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

    // 图片动画效果
    $(".row").on("mouseover",".cols",function(){
        // console.log(1);
        $(this).find('.price').hide();
        $(this).find('.cart').show();
        $(this).stop().animate("slow").css('box-shadow'," 0px 8px 8px rgb(201, 201, 201)").siblings("cols").animate("");

    })

    $(".row").on("mouseout",".cols",function(){
        // console.log(1);
        $(this).find('.price').show();
        $(this).find('.cart').hide();
        $(this).stop().animate({},300).css('box-shadow',"").siblings("cols").animate("");

    })
})

// 阴影
// $('.box.lifted').shadow('lifted');
// var row = document.getElementsByClassName("row")[0];
// // console.log(row);
// row.onmouseover = function(eve){
//     var e = eve || event;
//     var target = e.target || e.srcElement;
//     if(target.className == "cols cola"){
//         console.log(1);
//         target.style.whidt = "252px";
//         target.style.height = "322px";
//         target.style.marginTop ="-3px";
//     }
// }

