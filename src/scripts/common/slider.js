                                // slider
{
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 130,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            1420: {
                slidesPerView: 1,
                navigation: false
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
}


                    // adapt menu

{
    
    var btnadapt  = document.getElementById('btnadapt'); 
    var close = document.getElementById('close');
    var adaptmenu = document.getElementById('adaptmenu');

    btnadapt.addEventListener('click', function () {
        adaptmenu.classList.add('visibladaptmenu');
    });

    close.addEventListener('click', function () {
        adaptmenu.classList.remove('visibladaptmenu');
    });
}
