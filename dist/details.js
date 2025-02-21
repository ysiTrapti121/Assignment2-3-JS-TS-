import { Taskdata } from "./data.js";
document.addEventListener('DOMContentLoaded', () => {
    const usp = new URLSearchParams(window.location.search);
    console.log(usp.toString());
    const taskid = usp.get('Task_ID');
    console.log(taskid);
    if (!taskid) {
        return;
    }
    const taskIdNumber = parseInt(taskid, 10);
    const task = Taskdata.find(t => t.Task_ID === taskIdNumber);
    if (task) {
        console.log(task);
        const tID = document.getElementById('taskId');
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
    }
    else {
        console.log("NA");
        alert('Task not found');
    }
});
//# sourceMappingURL=details.js.map