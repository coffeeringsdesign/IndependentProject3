// // business logic
var inputNumber;
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
var robotResponse = [];
console.log(robotResponse);

function textReplaceNumbers(inputNumber) {
  for (var i = 0; i <= inputNumber; i++) {
  var numberString = inputNumber.toString();
    if (inputNumber !=0 && inputNumber % 3 === 0) {
      robotResponse.push(dave);
      return;
    } else if (inputNumber === 1 || numberString.includes("1")) {
      robotResponse.push(boop);
      return;
    } else if (inputNumber === 0 || numberString.includes("0")) {
      robotResponse.push(beep);
      return;
    } else {
      robotResponse.push(inputNumber);
      return;
    }
}
}
// // user interface Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    inputNumber = $("input#visitorInput").val();
    $('input[type="number"], textarea').val('');
    textReplaceNumbers(inputNumber)
    robotResponse.forEach(function(number) {
      $("#finalOutput").append("<li id='finalOutput'>" + robotResponse + "</li>");
    })
    $("#toHide").show();
  });
});
