const usp = new URLSearchParams(window.location.search);
console.log(usp.toString());
const taskid= usp.get('Task_ID');
console.log(taskid);

const task= Taskdata.find(t=>t.Task_ID == taskid);
if (task){
  console.log(task.Task_ID);
  document.getElementById('taskID').value= task.Task_ID;
  document.getElementById('desc').value= task.Task_Description;
  document.getElementById('assignedTo').value= task.Assigned_to;
  document.getElementById('dueDate').value= task.Due_Date;

}
else {
    alert('Task not found');
}
