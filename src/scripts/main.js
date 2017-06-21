$(document).ready(function() {

  //slick-slider

   $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.slick-dots button:first').addClass("slider-btn-active");

  $(".slick-dots").on("click", "button", function(){
    $(".slick-dots button").removeClass("slider-btn-active");
    $(this).addClass("slider-btn-active");
   });

  //burger-menu  hide and show
  $( ".burger-menu" ).click(function() {
    $( ".page-header__nav" ).toggle();
    $( ".header-banner" ).toggle();
  });

});



//burger-menu  animation

function myFunction(myClass) {
  myClass.classList.toggle("change");
}


