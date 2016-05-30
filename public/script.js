var userData;
var newUserData;

var userData = {
  users:[
    {
      name: $("#nameInput").text(),
      phone: $("#phoneInput").text(),
      topics: $("#checkArray").val()
    }
  ]
}
// getUsers = function() {
//   $.ajax({
//     type: "GET",
//     crossDomain: true,
//     url: "http://localhost:3000/getUsers",
//     success: function(data) {
//       // $("#submitButton").text(data);
//         userData = data;
//         giveUserFeedback("Success!")
//         $("#pname").text(data.users[0].name);
//     },
//     error: function(xhr, status) {
//         alert("Error");
//     },
//     dataType: "json"
//   });
// }

// giveUserFeedback = function(val) {
//   $("#submitButton").text(val);
// }
function getUserInput(){
  newUserData = {
    name: $("#nameInput").text(),
    phone: $("#phoneInput").text(),
    topics: $("#checkArray").val()
  }
}


addNewUser = function() {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/addNewUser",
    crossDomain: "true",
    data: newUserData,
    dataType: "json",
    success: function(data) {
      // $("#submitButton").text(data);
        userData = data;
        giveUserFeedback("Success!")
    },
    error: function(xhr, status) {
        alert("Error");
    },
  });
}

giveUserFeedback = function(val) {
  $("#submitButton").text(val);
}