import { Taskdata } from "./data";
const usp = new URLSearchParams(window.location.search);
console.log(usp.toString());
const taskid = usp.get('Task_ID');
console.log(taskid);
const task = Taskdata.find(t => t.Task_ID.toString() == taskid);
if (task) {
    console.log(task);
    const tID = document.getElementById('taskID');
    const tDescription = document.getElementById('desc');
    const tAssigned = document.getElementById('assignedTo');
    const tdueDate = document.getElementById('dueDate');
    if (tID && tDescription && tAssigned && tdueDate) {
        tID.value = task.Task_ID.toString();
        tDescription.value = task.Task_Description;
        tAssigned.value = task.Assigned_To;
        tdueDate.value = task.Due_Date;
    }
    else {
        console.log("Error finding values");
    }
    //   document.getElementById('taskId').value= task.Task_ID;
    //   document.getElementById('desc').value= task.Task_Description;
    //   document.getElementById('assignedTo').value= task.Assigned_To;
    //   document.getElementById('dueDate').value= task.Due_Date;
}
else {
    console.log("NA");
    alert('Task not found');
}
