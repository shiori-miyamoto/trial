
$(document).ready(function(){
  $('.works__slider').slick({
    // arrows: true,
    centerMode: true,
    centerPadding: '100px',
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});