
                                                   
                                          // mask
    jQuery(function($){
    $("#phone").mask("(999) 999-9999");
    });

    jQuery(function($){
    $("#phone2").mask("(999) 999-9999");
    });
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


    
                            // hover effects

    // var btn1 = document.getElementById('btn1');
    // var btn2 = document.getElementById('btn2');
    // var card = document.getElementById('card');
    // var nal = document.getElementById('nal');
    // var block1 = document.getElementById('block1');
    // var block2 = document.getElementById('block2');
    // var block3 = document.getElementById('block3');

    // btn1.addEventListener('click', function () {
    //     btn2.classList.add('noneactive');
    //     btn1.classList.remove('noneactive');
    //     nal.classList.add('disp');
    //     card.classList.remove('disp');
    // });


    // btn2.addEventListener('click', function () {
    //     btn1.classList.add('noneactive');
    //     btn2.classList.remove('noneactive');
    //     nal.classList.remove('disp');
    //     card.classList.add('disp');
    // });

    // block1.addEventListener('click', function () {
    //     block1.classList.add('activblock');
    //     block2.classList.remove('activblock');
    //     block3.classList.remove('activblock');
    // });

    // block2.addEventListener('click', function () {
    //     block2.classList.add('activblock');
    //     block1.classList.remove('activblock');
    //     block3.classList.remove('activblock');
        
    // });

    // block3.addEventListener('click', function () {
    //     block3.classList.add('activblock');
    //     block2.classList.remove('activblock');
    //     block1.classList.remove('activblock');
        
    // });


    // var check1 = document.getElementById('check1');
    // var check2 = document.getElementById('check2');
    // var check3 = document.getElementById('check3');
    // var check4 = document.getElementById('check4');
    // var check5 = document.getElementById('check5');
    // var check6 = document.getElementById('check6');
    // var check7 = document.getElementById('check7');
    // var check8 = document.getElementById('check8');
    // var check9 = document.getElementById('check9');

    //     check1.addEventListener('click', function () {
    //     check1.classList.toggle('checkactive');
    // });

    // check2.addEventListener('click', function () {
    //     check2.classList.toggle('checkactive');
    // });

    // check3.addEventListener('click', function () {
    //     check3.classList.toggle('checkactive');
    // });

    // check4.addEventListener('click', function () {
    //     check4.classList.toggle('checkactive');
    // });

    // check5.addEventListener('click', function () {
    //     check5.classList.toggle('checkactive');
    // });

    // check6.addEventListener('click', function () {
    //     check6.classList.toggle('checkactive');
    // });

    // check7.addEventListener('click', function () {
    //     check7.classList.toggle('checkactive');
    // });

    // check8.addEventListener('click', function () {
    //     check8.classList.toggle('checkactive');
    // });

    // check9.addEventListener('click', function () {
    //     check9.classList.toggle('checkactive');
    // });



                            
    

