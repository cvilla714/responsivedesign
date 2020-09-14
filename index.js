$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 5) {
    $(".right_sticky5 a,.main").addClass("push_left");
  } else {
    $(".right_sticky5 a,.main").removeClass("push_left");
  }
});

$(window).scroll(function () {
  let scrollimg = $(window).scrollTop();
  if (scrollimg >= 5) {
    $(".logo_img").addClass("logo_display");
  } else {
    $(".logo_img").removeClass("logo_display");
  }
});
