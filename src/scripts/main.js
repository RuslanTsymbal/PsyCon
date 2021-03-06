$(document).ready(function() {

  //add class if width < 769px
  var width = $('body').innerWidth();

  if (width < 769) {
    $(".page-header__nav").addClass("nav-mob");
  } else {
    $(".page-header__nav").removeClass("nav-mob");
  }
  

  //slick-slider 1
   $('.fade-top').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
  });


  //slick-slider 2
  $('.fade-bot').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
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


  //add attr href
  $(function () {
    $('.nav-point a').each(function () {
      var link = this.href;
      $(this).attr("href", link);
    });
  });


  //active menu item
  $(function () {
    var location = window.location.href;
    // var cur_url = '/' + location.split('/').pop();

    $('.nav-point').each(function () {
      var link = $(this).find('a').attr('href');

      if (location == link)
        {
          $(this).addClass('nav-point-active');
        }
    });
  });

});
