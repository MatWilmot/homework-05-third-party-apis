$(document).ready(function () {
  var day = moment().format("dddd");
  var date = moment().format("MMM Do YYYY");
  var currentDay = day + ", " + date;
  $("#currentDay").append(currentDay);
});
