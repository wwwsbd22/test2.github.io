/*

  Template Name: Coreplex
    Template URI: http://hastech.company/
    Description: This is html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================
  01. jQuery MeanMenu

================================================*/

(function ($) {
	"use Strict";

new WOW().init();

// Nivo Slider
$('#slider').nivoSlider({
	effect: 'random',
	animSpeed:500,
	directionNav:true,
	manualAdvance: false,
	controlNavThumbs:false,
	pauseOnHover:true,
	controlNav:false,
	prevText:'<i class="zmdi zmdi-chevron-left"></i>',
	nextText:'<i class="zmdi zmdi-chevron-right"></i>',

});

    /*----------------------------
			countdown
    ------------------------------ */  
		$("#offercount")
		  .countdown("2018/01/01", function(event) {
			$(this).html(
			  event.strftime('<div class="count">%D <span>Days</span></div> <div class="count">%H <span>HRS</span></div> <div class="count">%M <span>Min</span></div><div class="count"> %S <span>Sec</span></div>')
			);
		  });

})(jQuery);