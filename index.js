
$(document).ready(function () {
  $(".talks .list-group-item").on("click", function () {

    $(this).toggleClass("active-content item").find('.content').slideToggle('fast', 'linear');
    $(this).find('.normal').toggle();
    $(this).siblings().removeClass('active-content').addClass('item').find('.content').slideUp('fast', 'linear');
    $(this).siblings().find(".normal").show();

  });

  $(".center").slick({
    dots: false,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode: true,
    centerPadding: '1px',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '1px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '1px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '1px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    
    
  });

  $(".regular").slick({
    dots: false,
    nextArrow: '<i class="flaticon-right"></i>',
    prevArrow: '<i class="flaticon-left"></i>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$(".variable").slick({
  dots: false,
  nextArrow: '<button type="button" class="slick-next flaticon-right-1">Next</button>',
  prevArrow: '<button type="button" class="slick-prev flaticon-left-1">Previous</button>',
  infinite: true,
  variableWidth: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  $('.sold').parents('.father').addClass("disabled");
  
});
