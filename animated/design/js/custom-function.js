/* Zipcode Character Function */			
function numbersonly(e, decimal) {
			var key;
			var keychar;
			if (window.event) {key = window.event.keyCode;}
			else if (e) {key = e.which;}
			else {return true;}
			keychar = String.fromCharCode(key);
			if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {return true;}
			else if ((("0123456789").indexOf(keychar) > -1)) {return true;}
			else if (decimal && (keychar == ".")) {return true;}
			else return false; 
			}
	/* Zipcode place Holder Function */	
        $(document).ready(function() {
            var holder = 'Zip Code';
            $('.zip').blur(function() {
                if ($(this).val().length == 0)
                    $(this).val(holder).addClass('holder');
            }).focus(function() {
                if ($(this).val() == holder)
                    $(this).val('').removeClass('holder');
            }).val(holder).addClass('holder');
        });
		
		
		/* Navugation */
		$('.navbar-toggle').click(function() {
  $('.navbar-toggle').toggleClass("nav-bg").toggleClass("pad");
  $('.navbar').toggleClass("nav-bg").toggleClass("pad");
});






