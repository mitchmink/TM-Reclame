$('#verzenden').live("click", function() {
	var url = '../verzenden.php';
	var error = 0;
	var $contactpage = $(this).closest('.ui-page');
	var $contactform = $(this).closest('.contact-form');
	$('.required', $contactform).each(function (i) {
        if ($(this).val() === '') {
			error++;
        }
	}); // each
	if (error > 0) {
			alert('Vul alle velden in a.u.b..');
	} else {
		var naam = $contactform.find('input[name="naam"]').val();
		var onderwerp = $contactform.find('input[name="onderwerp"]').val();
		var email = $contactform.find('input[name="email"]').val();
		var bericht = $contactform.find('textarea[name="bericht"]').val();	

		//submit the form
		$.ajax({
			type: "GET",
			url: url,
			data: {naam:naam, email:email, onderwerp:onderwerp, bericht:bericht},
            success: function (data) {
				if (data == 'success') {
					// show thank you
					$contactpage.find('.contact-thankyou').show();
					$contactpage.find('.contact-form').hide();
				}  else {
					alert('Het formulier kan niet worden verzonden. Probeer het opnieuw a.u.b.');
				}
			}
		}); //$.ajax

	}
	return false;
});