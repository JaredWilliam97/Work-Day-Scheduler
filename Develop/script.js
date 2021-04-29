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

  /// dynamicaly style the time blocks based on current time

  //functions
  // function will be responsible for checking the time and determining what class to add, past, present or future
  function checkTime() {
    //grab the current hour using moment js
    var currentHour = moment().hours();

    //check the currentHour against blockHour
    //if else

    //need to grab the hours for the time-block
    // loop through the entire block hrs
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1];
      if(blockHour < currentHour) {
        $(this).addClass('past')
    } else if(blockHour === currentHour) {
        $(this).addClass('present');
    }else {
        $(this).addClass('future;')
    }

    }

    });
  }

 
  checkTime();

  ///Event Handlers
  $(".saveBtn").on("click", function () {
    //need to capture the infromaton that the user inputted and we need to store the into local storage

    // need to capture teh value of the tinput and i also ned to know waht time its attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  //display the items that are in local storage into teh time blocks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});

// $(function() {

// })
