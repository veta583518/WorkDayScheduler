// // save button in modal was clicked
// $("#task-form-modal .btn-save").click(function() {
//     // get form values
//     var taskText = $("#modalTaskDescription").val();
//     var taskDate = $("#modalDueDate").val();
  
//     if (taskText && taskDate) {
//       createTask(taskText, taskDate, "toDo");
  
//       // close modal
//       $("#task-form-modal").modal("hide");
  
//       // save in tasks array
//       tasks.toDo.push({
//         text: taskText,
//         date: taskDate
//       });
  
//       saveTasks();
//     }
//   });