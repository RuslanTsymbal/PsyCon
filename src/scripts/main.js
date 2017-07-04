$(document).ready(function() {

  var widthParent_1 = $('.chat-pricing-cell').width();
  var widthlement_1 = $('.chat-pricing-cell__min').width();
  var styleleft_1 = (widthParent_1 - widthlement_1 ) / 2 + 'px';

  $('.chat-pricing-cell__min').css("left", styleleft_1);


  var widthParent_2 = $('.chat-pricing-cell-little').width();
  var widthlement_2 = $('.chat-pricing-cell__min-little').width();
  var styleleft_2 = (widthParent_2 - widthlement_2 ) / 2 + 'px';

  $('.chat-pricing-cell__min-little').css("left", styleleft_2);



  //add class if width < 769px
  var width = $('body').innerWidth();
  if (width < 769) {
      $(".page-header__nav").addClass("nav-mob");
  } else {
    $(".page-header__nav").removeClass("nav-mob");
  }

  //slick-slider
   $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  var statusFirst = false;
  var statusNew = false;

  //burger-menu  hide and show
  $(".burger-menu").click(function() {

    var darkBlock = $("div").is("#overlay");

    if(!statusFirst && !statusNew) {
      $(".nav-mob" ).toggle();
      $(".burger-menu" ).addClass("change");
      $(".bar1").toggleClass('bg-bar');
      $(".bar2").toggleClass('bg-bar');
      $(".bar3").toggleClass('bg-bar');
    }

    if (darkBlock) {
      $("#overlay").remove();
    } else {
      $("html,body").css("overflow","hidden");

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

    if(statusFirst) {
      $("#overlay").remove();
      statusFirst = false;
      $("html,body").css("overflow","auto");
    }
  });


  $(document).mouseup(function (e) {

    statusNew = false;
    var darkBlock = $("div").is("#overlay");

    if(darkBlock) {
     statusFirst = true;
    } else {
      statusFirst = false;
    }

    var container = $(".nav-mob");

    if (container.has(e.target).length === 0){
      container.hide("slow");
      $("#overlay").remove();
      $("html,body").css("overflow","auto");

    } else {
      statusNew = true;
    }

    if(!statusNew) {

      if(statusFirst) {
        $(".nav-mob" ).toggle();
        $(".burger-menu" ).removeClass("change");
        $(".bar1").toggleClass('bg-bar');
        $(".bar2").toggleClass('bg-bar');
        $(".bar3").toggleClass('bg-bar');
      }
    }
  });

   //Plugin select
   $("select" ).selecter();
});
