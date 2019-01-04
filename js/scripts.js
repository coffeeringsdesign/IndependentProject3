// business logic
var robotResponse = [];

function textReplaceNumbers(inputNumber) {
  for (var i = 1; i <= inputNumber; i++) {
    if (i !=0 && i % 3 === 0) {
      robotResponse.push(" I'm sorry, Dave. I'm afraid I can't do that");
    } else if (i.toString().indexOf("1") > -1) {
      robotResponse.push(" boop");
    } else if (i.toString().indexOf('0') > -1) {
      robotResponse.push(" beep");
    } else {
      robotResponse.push(" " + i);
    }
  }
  return robotResponse;
}

// user interface Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    $(".finalOutput").empty();
    const inputNumber = $("input#visitorInput").val();
    $('input[type="number"], textarea').val('');
    textReplaceNumbers(inputNumber);
    const robotResponseFinal = robotResponse.toString();
    $(".finalOutput").append("<h3>" + robotResponseFinal + "</h3>");
    $("#Gary1").addClass("toHide");
    $("#Gary2").removeClass("toHide");
    $("#toHide").show();
    $("#answer").show();
  });
});
