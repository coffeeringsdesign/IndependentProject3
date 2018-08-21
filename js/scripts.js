// // business logic
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
var robotResponseArray = [];

for (var i = 0; i < newInputArray.length; i +=1) {
  if (i === "0") {
    robotResponseArray.push(beep);
  } else if (i === "1") {
    robotResponseArray.push(boop);
  } else if (i === "2" || i === "3" || i === "4" || i === "5" || i === "6" || i === "7" || i === "8" || i === "9") {
    robotResponseArray.push(i);
  } else {
    alert("this aint working");
  }
  if (inputNumber % 3 === 0) {
    robotResponseArray.push(dave);
}
});
});
//   //   } else if (i % 3) {
//   //     splitRobotResponse[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
//   //   } else if (i > 3 || i <= 9) {
//   //     splitRobotResponse[i] = (i);
//   //   }
//   //   return splitRobotResponse;
//   //   // console.log(inputArray);
//   // }
//
// }



// // user interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    $("#inputForm").text("");
    event.preventDefault();


    // to later be backend


      // return;
    }
    var inputNumber = parseInt($("#inputNumber").val());
    // var newInputArray = inputNumber.split("");
