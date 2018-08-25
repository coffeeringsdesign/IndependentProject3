// // business logic
var inputNumber;
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
var robotResponse = [];
var robotResponseFinal = [];
// console.log(robotResponse);

function textReplaceNumbers(inputNumber) {
  for (var i = 0; i <= inputNumber; i++) {
  // var numberString = inputNumber.toString();
    if (i !=0 && i % 3 === 0) {
      robotResponse.push(dave);
    } else if (i.toString().indexOf("1") > -1) {
      robotResponse.push(boop);
    } else if (i.toString().indexOf('0') > -1) {
      robotResponse.push(beep);
    } else {
      robotResponse.push(i);
    }
}
return robotResponse;
}
// // user interface Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    inputNumber = $("input#visitorInput").val();
    $('input[type="number"], textarea').val('');
    textReplaceNumbers(inputNumber);
    $("#finalOutput").append("<li id='finalOutput'>" + robotResponse + "</li>");
    $("#toHide").show();
  });
});
