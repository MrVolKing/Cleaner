
            // popap

    var btn = document.getElementById('requrepopap');
    var openmodal = document.getElementById('openmodal');
    var close = document.getElementById('close');

    btn.addEventListener('click', function () {
        openmodal.classList.add('modalDialogActive');
    });

    close.addEventListener('click', function () {
        openmodal.classList.remove('modalDialogActive');
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
      
              $quantityNum.val(val + " - комната");
              console.log( $quantityNum.val)
              return;
      
            // if ($quantityNum.val() > 1) {
            //   $quantityNum.val(+$quantityNum.val() - 1);
            // }
          }
      
          function quantityPlus() {
      
      
      
              let val = parseInt($quantityNum.val().split(" ")[0])+1;
      
              $quantityNum.val(val + " - комната");
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
        
                $quantityNum2.val(val + " - санузел");
                console.log( $quantityNum2.val)
                return;
        
            // if ($quantityNum.val() > 1) {
            //   $quantityNum.val(+$quantityNum.val() - 1);
            // }
            }
        
            function quantityPlus2() {
        
        
        
                let val = parseInt($quantityNum2.val().split(" ")[0])+1;
        
                $quantityNum2.val(val + " - санузел");
                return;
        
        
            // $quantityNum.val(+$quantityNum.val() + 1);
            }
        
        
        })();
        
        });



                        // calc
    
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
