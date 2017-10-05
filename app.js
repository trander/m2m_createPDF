$(document).ready(function() {
  $('#myForm').submit(function(){
    //alert("submitted");
    // get data
    var data = $(this).serialize();
    alert(data);

    //create and save PDF
    var doc = new jsPDF();
    doc.text(data,10,10);
    doc.save('a4.pdf');

  });
});
