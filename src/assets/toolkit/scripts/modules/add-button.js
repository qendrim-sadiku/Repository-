$('.table td.open-modal').on('click', function(){

	$(this).addClass('active');

	$('button.add-button').on('click', function(){
		//var ThisParent = $(this).closest('div.other-modal').attr('qendrim');
		var createDiv = "<div class='app-div'>E zënë<div>"

		if ( !$('.table td.active').hasClass('hasElement') ) {
			$(createDiv).appendTo('.table td.active');
			$('.table td.active').addClass('hasElement');
		}

		$('.table td.open-modal').removeClass('active');

	});

	$('button.cancel-button').on('click', function(){

		$('.table td.active').find('div.app-div').remove();
		$('.table td.active').removeClass('hasElement');
		$('.table td.open-modal').removeClass('active');

	});

	$('#exampleModal2 .close-button').on('click', function(){

		$('.table td.open-modal').removeClass('active');

	});

});