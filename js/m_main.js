//侧边栏实现平滑过渡效果
$(document).ready(function () {
    //选择器缓存起来。这样每次点击时就不需要再重新查找 
    var $root = $('html, body');
    $('a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
        return false;
    });

    $(window).scroll(function () {
        var x = $(window).scrollTop();
        console.log($(window).scrollTop());
        $('.an_wrap').css('top', x);
        if (x > 400 && $('.an_wrap').attr('display') != 'block') {
            $('.an_wrap').show();
        } else if ($('.an_wrap').attr('display') != 'none') {
            $('.an_wrap').hide();
        }
    })
});