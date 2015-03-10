var setSkrollr = function($el, data) {
        for (var i = 0, l = data.length; i < l; i++) {
        var d = data[i],
        px = d[0];
        css = d[1];
        $el.attr('data-' + px, css);
        }
    }

jQuery(function($) {
        setSkrollr($('.nav-row'), [[0, 'transform:translateY(25px)'], [250, 'transform:translateY(0px)'],[251,'height: 130px'], [500, 'height:80px']]);
        setSkrollr($('.nav-row img'), [[0, 'width: 110px'], [500, 'width: 60px;']]);
        setSkrollr($('.left-nav'), [[0,'margin-top: 10px'], [500, 'margin-top:-5px']]);
        setSkrollr($('.nav-div ul'), [[0,'margin-top: 10px'], [500, 'margin-top:0px']]);
        skrollr.init({
        smoothScrolling: false
    });
});