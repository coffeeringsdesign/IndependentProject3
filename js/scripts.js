// // business logic
var inputNumber;
var beep = "Beep!"; //variable that says beep
var boop = "Boop!"; // variable that says boop
var dave = "I'm sorry, Dave. I'm afraid I can't do that."; //variable that says i'm sorry
var robotResponseArray = []; //an empty array to put the outputs too - before joining
// var robotResponse = robotResponseArray.toString();




function textReplaceNumbers(inputNumber) { //being called with inputNumber showing
  var numberString = inputNumber.split(" ");
  for (var i = 0; i <= numberString.length; i +=1) { //loop thru input
    if (inputNumber !=0 && inputNumber % 3 === 0) { // divided by 3
      robotResponseArray.push(dave); //push dave into the array
      console.log(robotResponseArray); //working for divided by 3
    } else if (i.includes("1")) {
      robotResponseArray.push(boop);
    // } else if (i.includes("0")) {
    //   robotResponseArray.push(beep);
    // } else {
    //   robotResponseArray.push(i);
    }
    // return robotResponse.split(",").join(", ");
}
}
// // user interface Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) { //pullsdata from input form
    event.preventDefault(); //stops automatic submit function
    inputNumber = $("input#visitorInput").val(); //sets input number for the entered value as variable ---- not string - working
    $('input[type="number"], textarea').val(''); //resets the form
    var result = ""; //sets an empty varible string
    textReplaceNumbers(inputNumber); //calls the function


    var robotResponseArray = [];
    robotResponseArray.forEach(function(number) {
      $("#results").append('<li class="finalOutput">' + textReplaceNumbers(number) + '</li>');
    })
    $("#finalOutput").show();
  });
});
