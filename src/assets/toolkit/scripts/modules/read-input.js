function displayVals() {
  var singleValues = $( ".search-modal #test" ).val(); 
  var multiValues = $( ".search-modal #second-test" ).val();
  var othermultiValues = $( ".search-modal #third-test" ).val();

  // When using jQuery 3:
  // var multipleValues = $( "#multiple" ).val();
  $( ".lokacioni" ).html( singleValues );
  $( ".dita" ).html( multiValues);
  $( ".hour" ).html( othermultiValues);
}
 
$( "select" ).change( displayVals );
displayVals();

