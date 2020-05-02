$(document).ready(function () {
  var day = moment().format("dddd");
  var date = moment().format("MMM Do YYYY");
  var currentDay = day + ", " + date;
  var currentHour = moment().format("H");
  var time = 0;
  var id = "";
  var toStore = "";
  var TAContent;

  $("#currentDay").append(currentDay);

  for (var i = 0; i < 12; i++) {
    // Create time as an equation of i
    if (i < 6) {
      time = i + 7;
    } else {
      time = i - 5;
    }
    // Set am/pm as an equation of i
    if (i < 5) {
      ampm = "am";
    } else {
      ampm = "pm";
    }

    // Determine the text content of an area, creare area if it doesnt exist
    TAContent = window.localStorage.getItem(`TA${i}`);
    if (TAContent === null) {
      window.localStorage.setItem(`TA${i}`, ``);
    }

    // Append each line to the screen
    $(".container").append(`<div class="row time-block">
    <p class="text-center col-1 pt-2 border-top">${time + " " + ampm}</p>
    <textarea name="TA${i}" id="TA${i}" cols="100" rows="3" placeholder="">${TAContent}</textarea>
    <button class="saveBtn" id="${i}">Save</button>
    <button class="delBtn" id="${i}">Clear</button>
  </div>`);
    // determine the background color of each row
    if (i + 7 < currentHour) {
      // make the background .past
      $(`#TA${i}`).attr("class", "past");
    }
    if (i + 7 == currentHour) {
      // make the background .present
      $(`#TA${i}`).attr("class", "present");
    }
    if (i + 7 > currentHour) {
      // make the background .future
      $(`#TA${i}`).attr("class", "future");
    }
  }
  $(".saveBtn").on("click", function () {
    // save to localStorage
    // collect id of text area, use it for name value in object
    id = $(this).attr("id");
    // collect text content of given area, use for data in object
    data = $(`#TA${id}`).val();
    // Set the appropriate key to the given value
    window.localStorage.setItem(`TA${id}`, data);
  });

  $(".delBtn").on("click", function () {
    // collect id of text area to get
    id = $(this).attr("id");
    // set its data to " "
    window.localStorage.setItem(`TA${id}`, " ");
    $(`#TA${id}`).val("");
  });
});
