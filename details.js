
const usp = new URLSearchParams(window.location.search);
console.log(usp.toString());
const taskid= usp.get('Task_ID');
console.log(taskid);

const task= Taskdata.find(t=>t.Task_ID == taskid);
if (task){
  console.log(task);
  document.getElementById('taskId').value= task.Task_ID;
  document.getElementById('desc').value= task.Task_Description;
  document.getElementById('assignedTo').value= task.Assigned_To;
  document.getElementById('dueDate').value= task.Due_Date;

}
else {
  console.log("NA");
    alert('Task not found');
}
