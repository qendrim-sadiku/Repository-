$('.imageThumb ').on('click', function() {
	var self = this;

  $('#main-product-image').attr('src',$(self).attr('src'));
});
		
 $(".remove").click(function(){
	$(this).parent(".pip").remove();
});