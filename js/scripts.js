// // business logic
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";


var textReplaceNumbers = function(inputNumber) {
  var robotResponseArray = [];
  var numberString = inputNumber.toString();
console.log(inputNumber);
  for (var i = 0; i <= inputNumber; i +=1) {
    if (inputNumber !=0 && inputNumber % 3 === 0) {
      robotResponseArray.push(dave);
    } else if (numberString.includes(1)) {
      robotResponseArray.push(boop);
    } else if (numberString.includes(0)) {
      robotResponseArray.push(beep);
    } else {
      robotResponseArray.push(i);
      var robotResponse = robotResponseArray.toString();

    }
}
};
//
//     return robotResponse;

// // user interface Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#inputNumber").val());
    $('input[type="number"], textarea').val('');
    var numberOutput = textReplaceNumbers(inputNumber);
    $("#result").text(numberOutput);
  });
});
