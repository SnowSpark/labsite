sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
    $(".slider>div#1").fadeIn(500);

    startSlider();


});

function startSlider(){
    count = $(".slider>div").size();

    loop = setInterval(function(){

        if(sliderNext>count){
           sliderInt = 1;
            sliderNext = 1;

        }

        $(".slider>div").delay(500).hide("slide",{direction:'left'},500);
        $(".slider>div#"+sliderNext).delay(500).show("slide",{direction:'right'},500);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    },3000)

};