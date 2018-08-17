// // business logic


// creates a blank array for the splitRobotResponse to be placed into

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
  $('#inputForm').trigger("reset");
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    var newInputArray = inputNumber.split("").map(function(t){return parseInt(t)});
    var robotResponseArray = [];
    var beep = "Beep!"
    var boop = "Boop!"
    var number;
    var dave = "I'm sorry, Dave. I'm afraid I can't do that."
    var trial = ([["Beep!",0],["Boop!",1],["2",2],["3",3],["4",4],["5",5],["6",6],["7",7],["8",8],["9",9]]);


    trail.forEach(function(number) {
      while (newInputArray[i] = number[1]) {
        robotResponseArray.push(number[0]);
    }
  });
});
});

//     for (var i = 0; i < newInputArray.length; i +=1) {
//       for (var j = 0; j < trial.length; j +=1) {
//         if (i = trail[1]) {
//           robotResponseArray.push(trail[0]);
//         }
//       }
//     }
//   });
// });


    // to later be backend

    // if (inputNumber / 3) {
    //   robotResponseArray.push(dave);
    //   return;
    // }

    // for (var i = 0; i < newInputArray.length; i +=1) {
    //   if (i === "0") {
    //     robotResponseArray.push(beep);
    //   } else if (i === "1") {
    //     robotResponseArray.push(boop);
    //   } else if (i === "2" || i === "3" || i === "4" || i === "5" || i === "6" || i === "7" || i === "8" || i === "9") {
    //     robotResponseArray.push(i);
    //     console.log(robotResponseArray);
    //   }
    // }
    //
    // newInputArray.indexOf("0", 4);
    //
    // $("#result").text(robotResponseArray);
