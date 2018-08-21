// // business logic
var toBeep="";
var toBoop="";
var toDave="";

// This identifies anything divisible by 3
var dave = function(numberDave){
    if (numberDave % 3===0 && numberDave!=0){
    toDave = true;
  } else {
    toDave = false;
  }
  return toDave;
};

// Any number with the digit 0 is raplaced by a BEEP
var beep = function numberArray){
  for(var i=0; i<arrayNumber.length; i++){
    if (arrayNumber[i] === "0"){
    toBeep = true;
  } else {
    toBeep=false;
  }
}
  return toBeep;
};

// Any number with the digit 1 is raplaced by a BOOP
var boop = function (arrayNumber){
  for(var i=0; i<arrayNumber.length; i++){
    if (arrayNumber[i] === "1"){
    toBoop = true;
  } else {
    toBoop= false;
  }
}
  return toBoop;
};

//User Interface Logic//
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    var numberSingle = parseInt($("#inputNumber").val());
    var hiDave = dave(numberDave);
    var arrayNumber = numberSingle.split();
    var boopBoop = boop(arrayNumber);
    var beepBeep = beep(arrayNumber);

    if (hiDave===true) {
      $("#yourName").html(name)
      $("#dave").show();
    } else if (inputNumber.includes("1")) { //this is how I made number with "1" be a priority and show "boop." Was having trouble with toBoop always returning false when the inputted value included both a 1 and a 0. Returned true if there was a 1 but no 0. Ths was my work around.//
      $("#boopName").html(name)
      $("#boop").show();
    } else if (beepBeep===true){
      $("#beepName").html(name)
      $("#beep").show();
    } else {
      $("#noneName").html(name)
      $("#none").show();
    }

  });

    $("#tryAgain").click(function(event){
      event.preventDefault();
      $("#beepboop")[0].reset();
      $("#beep").hide();
      $("#boop").hide();
      $("#dave").hide();
      $("#none").hide();
    });
});
