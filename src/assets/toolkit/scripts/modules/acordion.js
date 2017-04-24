$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $.expand = $(this).find(">:first-child");
    
   
  });
});