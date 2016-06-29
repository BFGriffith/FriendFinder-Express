/* logic to compare data from friends.js */
function compatibility() {
  //on-click to collect data into an object
  $('#submit').on('click', function() {
    var friendObject = {
      name: $("#name").val(),
      photo: $("#picture").val(),
      scores: []
    };

    for (i = 1; i < 11; i++) {//questions for-loop

      for (j = 1; j < 6; j++) {//answers for-loop
        //conditional to push in selected
        if ($("#optionRadio" + i + "-" + j).is(":checked")) {
          friendObject.scores.push($("#optionRadio" + i + "-" + j).val());
        }//END conditional
      }//END for-loop [j]
    }//END for-loop [i]

    var currentURL = window.location.origin;//root

    $.ajax({
      url: currentURL + "/api",
      method: "GET"
    }).done(function(friendsList) {

      // store all the total differences

      var result = [];

      // Loop through and display each of the customers
      for (var i = 0; i < friendsList.length; i++) {//friends

        var diff = 0;

        for (var j = 0; j < friendsList[i].scores.length; j++) {
          diff += Math.abs(friendObject.scores[j] - friendsList[i].scores[j]);//scores comparison
        }//END for-loop
        result.push(diff);
      }//END for-loop

      var minimum = 10000;

      for (i = 0; i < result.length; i++) {
        console.log(result[i]);
        minimum = Math.min(minimum, parseInt(result[i]));//comparison
      }
      console.log(minimum);
      var match;

      for (i = 0; i < result.length; i++) {
        if (minimum == result[i]) {
          match = i;
          break;
        }//END conditional
      }//END for-loop
      console.log(match);
      $("#result").html("<br><p>" + friendsList[match].name + "</p><br>");
      $("#result").append('<img src="' + friendsList[match].photo + '"><br>');
    });//END GET
  });//END on-click
}//END compatibility();

//call
compatibility();
