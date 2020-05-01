$(document).ready(function () {
  var day = moment().format("dddd");
  var date = moment().format("MMM Do YYYY");
  var currentDay = day + ", " + date;
  var currentHour = moment().format("h");
  var displayHour = 0;
  var time = 0;

  $("#currentDay").append(currentDay);

  for (var i = 0; i < 12; i++) {
    if (i < 6) {
      time = i + 7;
    } else {
      time = i - 5;
    }

    if (i < 5) {
      ampm = "am";
    } else {
      ampm = "pm";
    }
    $(".container").append(`<h1>${time + " " + ampm}</h1>`);
  }
});
