$(document).ready(function() {

  $("form#options").submit(function(event){
    event.preventDefault();
    var angle1 = parseInt($("#side1").val());
    var angle2 = parseInt($("#side2").val());
    var angle3 = parseInt($("#side3").val());
    if (angle1===angle2 && angle1===angle3){
      alert('this is an equilateral triangle');
    }
    else if (angle1!=angle2 && angle2!=angle3 && angle1!=angle3){
      alert('this is a scalene triangle')
    }
    else if (angle1!=angle2 && angle2===angle3 || angle1===angle3){
      alert('this is an Isosceles triangle')
    }
    $(".result").text(angle1);

   });
  });
