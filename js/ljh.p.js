(function () {
    function load(url, callback) {
        var f = function () {}
        if (callback !== undefined) {
           f = callback;
        }
        try {
            var image = document.createElement('img');
            image.onload = f;
            image.src = url;
            window.document.body.appendChild(image);
        } catch (e) {
            f();
        }
    }

    var url = window.location.href
    if (window.location != window.parent.location) {
    	url = document.referrer;
    }

    var url = document.referrer;
	window.setTimeout(500, load("//my.rtmark.net/img.gif?f=sync&partner=fa767f573019f1818061056c576bc1524e20e43ddbaaa32702aed22b54ecfb0d&ttl=&rurl=" + url))
})();
