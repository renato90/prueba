$(document).ready(function() {

   $('.cuadrado').mouseenter(function() {

       $(this).animate({
           height: '+=10px'
       });
       
   });

   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
    $('div').click(function() {
       $(this).toggle(1000);
   }); 

    $("#azul").append("<div class='circulo'>makerlab</div>");
});