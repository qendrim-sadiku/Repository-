$(document).ready(function() {
  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<span class=\"pip\">" +
            "<img class=\"imageThumb\" id=\"img\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
            "<br/><span class=\"remove\"></span>" +
            "</span>").insertAfter("#files");
            // $(".remove").click(function(){
            //   $(this).parent(".pip").remove();
            // });             
            $('.imageThumb ').on('click', function() {
              $('#main-product-image').attr('src',$(this).attr('src'));
            });     
            $(function(){
            $(".remove").click(function(){
                var pipParent = $(this).parent(".pip");
                swal({   
                title: "Fshijë foton?",   
                text: "  A jeni i sigurt qe deshironi te fshini kete foto?  Kujdes! Ky veprim nuk mund te kthehet mrapa.   ",   
                type: "warning",   
                showCancelButton: true,                     
                  confirmButtonColor: "#DD6B55",   
                  confirmButtonText: "Po, fshije kete foton",   
                  cancelButtonText: "Anuloje",
                  closeOnConfirm: true 
              }, 
              function(isConfirmed){ 
                  if(isConfirmed) {                  
                    //let rev = $(".remove");
                    
                    pipParent.remove();                                                              
                    swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
                  }
                }
              );
            });
          });
        });
        fileReader.readAsDataURL(f);
      }
    });
    } else {
      alert("Your browser doesn't support to File API")
    }
});