$(function(){
    $('li').hover(function(){
       jQuery(".menu-bg", this).stop().animate({width: "100%"});
    },(function(){
       jQuery(".menu-bg", this).stop().animate({width: "0%"});
    }));
});