// // business logic
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";

function textReplaceNumbers(number) {
  var robotResponseArray = [];
  var robotResponse = robotResponseArray.toString();
console.log(inputNumber);
  for (var i = 0; i <= inputNumber; i +=1) {
    if (i !=0 && i % 3 === 0) {
      robotResponseArray.push(dave);
    } else if (i.includes("1")) {
      robotResponseArray.push(boop);
    } else if (i.includes("0")) {
      robotResponseArray.push(beep);
    } else {
      robotResponseArray.push(i);
    }
    return robotResponse.split(",").join(", ");
}
}
// // user interface Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("input#visitorInput").val();
    console.log(inputNumber);
    $('input[type="number"], textarea').val('');
    var result = "";
    textReplaceNumbers(inputNumber);
    var robotResponseArray = [];
    robotResponseArray.forEach(function(number) {
      $("#results").append('<li class="finalOutput">' + textReplaceNumbers(number) + '</li>');
    })
    $("#finalOutput").show();
  });
});
