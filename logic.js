var currentDate = moment().format("ddd, MMMM Do");
var localTime = moment().format("h:mm a");
var saveBtn = $(".saveBtn");
var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);

$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));


$(document).ready(function () {

    renderPlans();
    //Placing current date and time at top of page
    $(".lead").text("Today is: " + currentDate);
    $("#currentDay").text("The local time is: " + localTime);

    //for loop to update the time and change row colors
    for (var i = 0; i <= 12; i++) {
        var inputTime = $("#" + i + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        if (currentTimeInt === inputTimeInt) {
            $("#" + i + "Row").addClass("present");
        }
        if (currentTimeInt < inputTimeInt) {
            $("#" + i + "Row").addClass("future");
        }
        if (currentTimeInt > inputTimeInt) {
            $("#" + i + "Row").addClass("past")
        }
    }

    // button hover
    saveBtn.on("mouseenter", function() {
        $(this).addClass("hover");
    });

    saveBtn.on("mouseleave", function() {
        $(this).removeClass("hover");
    });

    // button click
    //set variables for the hour that was clicked and the value that was entered for that hour
    saveBtn.on("click", function() {
        var hour = $(this).attr("data-hour");
        var userInput = $("#" + hour + "Row").val();
        localStorage.setItem(hour,userInput);
    }); 

    //function to retrieve stored user inputs 
    function renderPlans() {
        for (var j=1; j<=12; j++) {
            $("#" + j + "Row").val(localStorage.getItem(j));
        }

    }

});