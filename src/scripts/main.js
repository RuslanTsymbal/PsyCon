$(document).ready(function() {

  //slick-slider

   $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


   var status = false;

  //burger-menu  hide and show
  $( ".burger-menu" ).click(function() {
    $( ".page-header__nav" ).toggle();
    $(".bar1").toggleClass('bg-bar');
    $(".bar2").toggleClass('bg-bar');
    $(".bar3").toggleClass('bg-bar');

// debugger;
    var darkBlock = $("div").is("#overlay");
    var t = status;

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

    $(document).mouseup(function (e) {
      // debugger;
    var darkBlock = $("div").is("#overlay");

    if(darkBlock) {
      status = true;
    }

    var container = $(".page-header__nav");
    if (container.has(e.target).length === 0){
      container.hide("slow");
      // $("#overlay").remove();
    }
 });
});


//burger-menu  animation

function myFunction(myClass) {
  myClass.classList.toggle("change");
}
