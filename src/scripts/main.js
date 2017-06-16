$(document).ready(function() {

  //slick-slider

   $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".slick-dots").on("click", "button", function(){
    $(".slick-dots button").removeClass("slider-btn-active");
    $(this).addClass("slider-btn-active");
   });
});
