// Swiper Slider

// {
//   var swiper = new Swiper('.swiper-container', {
//       navigation: {
//           nextEl: '.swiper-button-next',
//            prevEl: '.swiper-button-prev',
//        },
//        });
// };



{
    var swiper = new Swiper('.swiper-container', {
        // loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          // el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-nex',
            prevEl: '.swiper-button-pre',
          },
      });
}


{
    var swiper = new Swiper('.swiper-contain', {
        // spaceBetween: 30,
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
       

// {
//   $('.fade').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.nav'
//     });
//     $('.nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.fade',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//     });
// }