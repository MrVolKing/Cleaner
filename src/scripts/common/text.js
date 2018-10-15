
            // popap

    var btn = document.getElementById('requrepopap');
    var openmodal1 = document.getElementById('openmodal1');  
    var close1 = document.getElementById('close1');
    var close2 = document.getElementById('close2');
    // var close3 = document.getElementById('close3');
    var requrepopap2 = document.getElementById('requrepopap2');
    var requrepopap3 = document.getElementById('requrepopap3');
    var requrepopap4 = document.getElementById('requrepopap4');
    var requrepopap5 = document.getElementById('requrepopap5');
    var requrepopap6 = document.getElementById('requrepopap6');
    var requrepopap7 = document.getElementById('requrepopap7');
    var requrepopap8 = document.getElementById('requrepopap8');
    var requrepopap9 = document.getElementById('requrepopap9');
    var requrepopap10 = document.getElementById('requrepopap10');
    var requrepopap11 = document.getElementById('requrepopap11');
    var requrepopap12 = document.getElementById('requrepopap12');
    // var requrepopap13 = document.getElementById('requrepopap13');
    // var requrepopap14 = document.getElementById('requrepopap14');
    // var requrepopap15 = document.getElementById('requrepopap15');
    var requrepopap16 = document.getElementById('requrepopap16');
    var requrepopap17 = document.getElementById('requrepopap17');
    var requrepopap18 = document.getElementById('requrepopap18');
    var requrepopap19 = document.getElementById('requrepopap19');
    // var requrepopap20 = document.getElementById('requrepopap20');
    // var requrepopap21 = document.getElementById('requrepopap21');
    // var requrepopap22 = document.getElementById('requrepopap22');
    // var requrepopap23 = document.getElementById('requrepopap23');
    var openmodal2 = document.getElementById('openmodal2');



    btn.addEventListener('click', function () {
        openmodal1.classList.add('modalDialogActive');
    });

    close1.addEventListener('click', function () {
        openmodal1.classList.remove('modalDialogActive');
    });

    requrepopap2.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap3.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap4.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap5.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap6.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap7.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap8.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap9.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap10.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap11.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap12.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    // requrepopap13.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    // requrepopap14.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    // requrepopap15.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    requrepopap16.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap17.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap18.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    requrepopap19.addEventListener('click', function () {
        openmodal2.classList.add('modalDialogActive');
    });

    // requrepopap20.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    // requrepopap21.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    // requrepopap22.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    // requrepopap23.addEventListener('click', function () {
    //     openmodal2.classList.add('modalDialogActive');
    // });

    close2.addEventListener('click', function () {
        openmodal2.classList.remove('modalDialogActive');
    });


    $("#requrepopap").click(function (){
        var screen = $(window).height();
        $('html, body').scrollTop( screen );
        ;
      });

    



                                    //  top input
    $(function() {

        (function quantityProducts() {
          var $quantityArrowMinus = $(".quantity-arrow-minus");
          var $quantityArrowPlus = $(".quantity-arrow-plus");
          var $quantityNum = $(".quantity-num");
      
          $quantityArrowMinus.click(quantityMinus);
          $quantityArrowPlus.click(quantityPlus);
      
          function quantityMinus() {
      
              let val = parseInt($quantityNum.val().split(" ")[0])-1;
      
              $quantityNum.val(val);
              console.log( $quantityNum.val)
              return;
      
            // if ($quantityNum.val() > 1) {
            //   $quantityNum.val(+$quantityNum.val() - 1);
            // }
          }
      
          function quantityPlus() {
      
      
      
              let val = parseInt($quantityNum.val().split(" ")[0])+1;
      
              $quantityNum.val(val);
              return;
      
      
            // $quantityNum.val(+$quantityNum.val() + 1);
          }
      
      
        })();
      
      });




                                // bottom input

    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus2 = $(".quantity-arrow-minus2");
            var $quantityArrowPlus2 = $(".quantity-arrow-plus2");
            var $quantityNum2 = $(".quantity-num2");
        
            $quantityArrowMinus2.click(quantityMinus2);
            $quantityArrowPlus2.click(quantityPlus2);
        
            function quantityMinus2() {
        
                let val = parseInt($quantityNum2.val().split(" ")[0])-1;
        
                $quantityNum2.val(val);
                console.log( $quantityNum2.val)
                return;
        
            // if ($quantityNum.val() > 1) {
            //   $quantityNum.val(+$quantityNum.val() - 1);
            // }
            }
        
            function quantityPlus2() {
        
        
        
                let val = parseInt($quantityNum2.val().split(" ")[0])+1;
        
                $quantityNum2.val(val);
                return;
        
        
            // $quantityNum.val(+$quantityNum.val() + 1);
            }
        
        
        })();
        
        });



                        // calc


    // $(document).ready(() => {

    //     let global_result = window.localStorage.getItem('global_result') || 0; //undefined
    //     let weeks_rez = 1;
    //     let dishes_rez = 0;
    //     let freq_text = 'Один раз';
    //     let discount = '';
    
    //     const $count_rooms_el = $('#count_rooms');
    //     const $count_suns_el = $('#count_suns');
    
    //     const btn_step1 = $('#btn_step1');
    
    //     function recount(argument) {
    //         $('#global_sum_result').html(global_result * weeks_rez + dishes_rez);
    //         $('#regulirity').html(freq_text);
    //         if (discount) {
    //             $('#discount').show();
    //             $('#discount').html(discount);
    //         }
    //         else {
    //             $('#discount').hide();
    //         }
    //     }
    //     recount();
    
    
    //     btn_step1.on('click', () => {
    //         const count_rooms_el_val = $count_rooms_el.val();
    //         const count_suns_el_val = $count_suns_el.val();
    //         global_result = +count_rooms_el_val + +count_suns_el_val;
    //         console.log('global_result', global_result);
    //         if(global_result === 2) {
    //             window.localStorage.setItem('global_result', global_result + 478);
    //         }
    //         else if(global_result === 3) {
    //             window.localStorage.setItem('global_result', global_result + 597);
    //         }
    //         else if(global_result === 4) {
    //             window.localStorage.setItem('global_result', global_result + 716);
    //         }
    
    //         else{
    //             window.localStorage.setItem('global_result', 770);
    //         }
            
    
    //         window.location.assign('./order.html');
    //     });
    
    
    //     $('.freq').on('click', () => {
    //         const $checkedRadio = $(".freq:checked");
    //         weeks_rez = $checkedRadio.val();
    //         freq_text = $checkedRadio.attr('data-text');
    //         discount = $checkedRadio.attr('data-discount');
            
    
    //         recount();
    //     });
    
    //     $('.dishes').on('click', () => {
    //         const dishes = $(".dishes:checked");
    //         dishes_rez = 0;
    
    //         for (var i = 0; i < dishes.length; i++) {
    //             dishes_rez += +$(dishes[i]).val();
    //         }
    
    //         recount();
    //     });
    // });
    
    
    // var col =document.getElementById('discount');
    
    // col.addEventListener('click', () => {
    //     col.classList.toggle('class');
    // });
    
                        

    
                        // info

// var btn1 = document.getElementById('btn1');
// var btn2 = document.getElementById('btn2');
// var card = document.getElementById('card');
// var nal = document.getElementById('nal');

// btn1.addEventListener('click', function () {
//     btn2.classList.add('noneactive');
//     nal.classList.add('disp');
// });


// btn2.addEventListener('click', function () {
//     btn1.classList.add('noneactive');
//     btn2.classList.remove('noneactive');
//     nal.classList.remove('disp');
//     card.classList.add('disp');
// });
