// // business logic
var simplenumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberReplies = ["Beep!", "Boop!", "2", "3", "4", "5", "6", "7", "8", "9"];
var number = "";
var bothNumbers = [];
var finalNumbers = [];
var numbers = [["Beep!",0], ["Boop!",1], ["2",2] ["3",3], ["4",4], ["5",5], ["6",6], ["7",7], ["8",8] ["9",9]];

numbers.forEach(function(number) {

})

// }
// console.log(bothNumbers);
//
// var translatedNumbers = function(inputString) {
//   for (var i = 0; i < sdfssss.length; i++) {
//
// console.log(translatedNumbers);
// });
// });
//
//
// // user interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
      var inputNumber = parseInt($("#inputNumber").val());
      inputNumber = inputNumber.split("");
// console.log(inputNumber)
      inputNumber.forEach(function(inputString) {
            var result = translatedNumbers(inputString);
//             console.log(inputString);
//       //       finalNumbers.push(result);
//       //       var finalResult = finalNumbers.join(" ");
//       //       $("#beepBoopOutput").text(finalNumbers);
//       // });
  })
});
});
