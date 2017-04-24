$('.imageThumb ').on('click', function() {
	

  $('#main-product-image').attr('src',$(this).attr('src'));
});
		
 $(".remove").click(function(){
	$(this).parent(".pip").remove();
});