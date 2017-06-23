$(document).ready(function() {

  //slick-slider

   $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  //burger-menu  hide and show
  $( ".burger-menu" ).click(function() {
    $( ".page-header__nav" ).toggle();
    $(".bar1").toggleClass('bg-bar');
    $(".bar2").toggleClass('bg-bar');
    $(".bar3").toggleClass('bg-bar');


    var darkBlock = $("div").is("#overlay")

    if (darkBlock) {
      $("#overlay").remove();
    } else {
      var docHeight = $(document).height();
      $("body").append("<div id='overlay'></div>");
      $("#overlay")
          .height(docHeight)
          .css({
             'opacity' : 0.4,
             'position': 'absolute',
             'top': 0,
             'left': 0,
             'background-color': 'black',
             'width': '100%',
             'z-index': 1
          });
    }
  });
});


//burger-menu  animation

function myFunction(myClass) {
  myClass.classList.toggle("change");
}
