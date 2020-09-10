console.log("hello my friend");

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 5) {
    //console.log('a');
    $(".right_sticky5 a,.main").addClass("push_left");
  } else {
    //console.log('a');
    $(".right_sticky5 a,.main").removeClass("push_left");
  }
});

// $(window).scroll(function () {
// let scrolling = $(window).scrollTop();
// console.log(scroll);
// if (scrolling >= 5) {
// console.log("a");
// $(".main").addClass("push_left");
// } else {
// console.log("a");
// $(".main").removeClass("push_left");
// }
// });

$(window).scroll(function () {
  let scrollimg = $(window).scrollTop();
  // console.log(scroll);
  if (scrollimg >= 5) {
    $(".logo_img").addClass("logo_display");
  } else {
    // console.log("a");
    $(".logo_img").removeClass("logo_display");
  }
});

// $(function () {
// $(".news").menu();
// });
