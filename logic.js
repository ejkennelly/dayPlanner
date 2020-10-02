$(document).ready(function(){
var now = moment().format("dddd");
console.log(now);
$(".lead").text("Today is: " + now);
$("#currentDay").text("The local time is: " + moment().format("h:mm a"));

})