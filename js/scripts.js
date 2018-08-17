// business logic
// var nonNumbers = [NaN];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberReplies = ["Beep!", "Boop!", "2", "3", "4", "5", "6", "7", "8", "9"]
var bothNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  for (var j = 0, j < numberReplies.length; i++) {
    var numberReply = numberReplies[j];
    var combinedNumbers = [number, numberReply];
    bothNumbers.push(combinedNumbers);
}
console.log(bothNumbers);

var finalNumbers = [];

var translatedNumbers = function(inputString) {
  for (var i = 0; i < sdfssss.length; i++) {
    if (NaN.includes(inputstring.charAt(i))) {
      alert("Please enter a single number this time?");
// console.log(translatedNumbers);
    }
  }
}


// user interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
      var inputNumber = parseInt($("#inputNumber").val())

      // inputNumber.forEach(function(inputString) {
      //       var result = translatedNumbers(inputString);
      //       finalNumbers.push(result);
      //       var finalResult = finalNumbers.join(" ");
      //       $("#beepBoopOutput").text(finalNumbers);
      // });
  });
});
