$(document).ready(function () {
  //Поява та зникнення кнопки "Вгору"
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  // Плавна прокрутка вгору при кліку на кнопку "Вгору"
  $(".scroll-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // Плавна прокрутка до вибраного розділу при кліку на посилання меню
  $(".header-menu-link").on("click", function (event) {
    event.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
  // Виклик slideToggle() при кліку на кнопку для секції
  $(".toggle-icon").on("click", function () {
    $(".blog-latespost").slideToggle();
  });
});
