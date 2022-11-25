$(document).ready(function () {
  const quiz = new Quiz(document.querySelector(".nodone-block"));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  $(".dannye-sl").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".dannye-border-sl").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".table-inner").css({display:'none'})
  $(".table-button").click(function () {
    $(".table-arrow").toggleClass("hide");
    $(".table-button").toggleClass("hide");
    if ($(".table-button").hasClass("hide")) {
      $(".table-button button").text("Развернуть таблицу");
    } else {
      $(".table-button button").text("Свернуть таблицу");
    }
    $(".table-inner").animate({
      height: "toggle",
    });
  });
});

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".mt-mobile");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  body.classList.toggle("body-open");
  burger.classList.toggle("burger-open");
});
