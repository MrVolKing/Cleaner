
{
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 130,
        pagination: {
          // el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
}

