 $( "#datepicker" ).datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  numberOfMonths: 1,
  altField: "#alternate",
  altFormat: "d M, yy",
  minDate: 0, 
  maxDate: "+1Y +1D"
});
