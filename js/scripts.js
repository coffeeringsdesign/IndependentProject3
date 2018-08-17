// // business logic
var simplenumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberReplies = ["Beep!", "Boop!", "2", "3", "4", "5", "6", "7", "8", "9"];
var numbers = [["Beep!",0], ["Boop!",1], ["2",2] ["3",3], ["4",4], ["5",5], ["6",6], ["7",7], ["8",8] ["9",9]];

// creates a blank array for the splitRobotResponse to be placed into
var splitRobotResponse = [];

// loops through the whole input number
var toReturn = function(inputNumber){



  //   } else if (i % 3) {
  //     splitRobotResponse[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
  //   } else if (i > 3 || i <= 9) {
  //     splitRobotResponse[i] = (i);
  //   }
  //   return splitRobotResponse;
  //   // console.log(inputArray);
  // }

}



// // user interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();

    var results = toReturn(inputNumber);

    // to later be backend
    var inputArray = inputNumber.split("");
    for (var i = 0; i < inputArray.length; i++) {
      splitRobotResponse.push(i);
      if (i === 0) {
        splitRobotResponse[i] = "Beep!";
      } else if (i === 1) {
        splitRobotResponse[i] = "Boop!";
      } else if (i < 9 && i > 1) {
        splitRobotResponse[i] = (i)
      } else if (i === 3) {
        splitRobotResponse[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      }
    }


    console.log(splitRobotResponse);
});
});
