$(function() {
	
	/**-------------------------------------------------
    *Fixed HEader
    *----------------------------------------------------**/
   $(window).on('scroll', function () {

      /**Fixed header**/
      if ( $(window).scrollTop() > 250 ) {

         $('.header').addClass('sticky fade_down_effect');
      } else {
        
         $('.header').removeClass('sticky fade_down_effect');
      }
   });



    





});