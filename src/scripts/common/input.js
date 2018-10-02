// {
   
// 		$(document).ready(function(){
//     PopUpHide();
// });
// function PopUpShow(){
//     $("#popup1").show();
// }
// function PopUpHide(){
//     $("#popup1").hide();
// }


// }


$(function() {

    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity-arrow-minus");
      var $quantityArrowPlus = $(".quantity-arrow-plus");
      var $quantityNum = $(".quantity-num");
  
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
  
      function quantityMinus() {
  
          let val = parseInt($quantityNum.val().split(" ")[0])-1;
  
          $quantityNum.val(val + " м²");
          console.log( $quantityNum.val)
          return;
  
        // if ($quantityNum.val() > 1) {
        //   $quantityNum.val(+$quantityNum.val() - 1);
        // }
      }
  
      function quantityPlus() {
  
  
  
          let val = parseInt($quantityNum.val().split(" ")[0])+1;
  
          $quantityNum.val(val + " м²");
          return;
  
  
        // $quantityNum.val(+$quantityNum.val() + 1);
      }
  
  
    })();
  
  });