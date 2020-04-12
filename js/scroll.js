$(document).ready(function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (window.pageYOffset > 80) {
      if (prevScrollpos > currentScrollPos) {
        $(".navbar").addClass("fadeInDown");
        $(".navbar").removeClass("fadeOutUp");
      } else {
        $(".navbar").addClass("fadeOutUp");
        $(".navbar").removeClass("fadeInDown");
      }
      prevScrollpos = currentScrollPos;
    }
  };
  console.log(prevScrollpos);
});
