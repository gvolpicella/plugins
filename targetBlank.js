/*
* jQuery targetBlank
* Copyright (c) 2013 Giuseppe volpicella
* Version: V1.0
* Release: 17-01-2013
* Based on jQuery 1.6.2+
* ------------------------------------------------------------------------------------
* The following plug-in was created to comply to the W3C standards on the now obsolete
* target="_BLANK" .
*
* USAGE: $('a').targetBlank();
*/ 
(function($){
 
    //Attach this new method to jQuery
    $.fn.extend({
         
        targetBlank: function() {
 
            //Iterate over the current set of matched elements
            return this.each(function() {
             
				var _this = $(this);

				// is target attribute _BLANK ?
				if ( _this.prop('target') === "_blank" ) {

					//Assign an "Open in a new tab" event	
					_this.removeAttr("target").live('click', function (e) {
		            	window.open(_this[0].href);

		            	// Prevent the link from actually being followed
		            	e.preventDefault();
		        	});
				}

            });
        }
    });

})(jQuery);


        