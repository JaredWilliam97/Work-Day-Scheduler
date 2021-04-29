// the current day is displayed at the top of the calener
$(document).ready(function () {
  //wriete all of our jquery inside this function
  //first, grab a reference to the element that we want the time to be displayed

  var currentDay = $("#currentDay");
  //   console.log(currentDay);

  //display the current date in that variable
  currentDay.text(moment().format("dddd MMM Do"));

  // display the date to the user

  //currently, im able to write text in the textarea, but not carptuing the data storing in the local storage

  //functions

  ///Event Handlers
  $(".saveBtn").on("click", function () {
    //need to capture the infromaton that the user inputted and we need to store the into local storage

    // need to capture teh value of the tinput and i also ned to know waht time its attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem();
  });
});

// $(function() {

// })
