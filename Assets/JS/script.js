var tasks = [];


var loadTasks = function() {
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
};

loadTasks();

// display current date and time
$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd, MMMM Do hh:mm:ss a'));
    loadTasks();
})

// audit time blocks to code appropriately as past present, future
var auditTime = function(tasks) { 
    var currentHour = moment().format('HH');
    var taskHour = $(this).attr("id");
    $(".time-block").each(function() {

        // if statements to compare current hour with task hour
        if (taskHour === currentHour) {
            $(this).addClass("present");
        } else if (taskHour < currentHour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("past");
        } 
    })
};
auditTime();
    
// set interval to update every 3-5 min (run audit time at the end)
// setInterval(function(){

// })
    
// save task from planner to local storage
var saveTask = function() {
    localStorage.setItem(taskTime, taskText, JSON.stringify(tasks));
}

// save tasks on click
$(".saveBtn").click(function() {
    // get text and id from textares
    var taskText = $(this).sibling("textarea").val().trim();
    var taskTime = $(this).sibling("textarea").attr(id);
    var index = parseInt(taskTime);

    // push to tasks array if null
    tasks.push({
        id: index,
        text: taskText
    });
    saveTask();

});
