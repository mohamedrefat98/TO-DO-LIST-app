function addTask() {
  let taskName = document.getElementById("newTask").value;
  let priority = document.getElementById("priority").value;
  let task = new Task(taskName, priority);
  tasks.push(task);
  document.querySelector("table").innerHTML += `
        <tr>  
        <td scope="col">${taskCount}</td>
        <td scope="col">${task.taskName}</td>
        <td scope="col">${task.priority}</td>
        <td scope="col"><button class="btn btn-success" id="delete">delete</button></td>
        </tr>
        `;
  taskCount++;
}

let taskCount = 1;
const tasks = [];

document.getElementById("add").onclick = function () {
  if (document.getElementById("newTask").value.length == 0) {
    alert("please input a valid task");
  } else {
    addTask();
  }
};

class Task {
  constructor(taskName, priority) {
    this.taskName = taskName;
    this.priority = priority;
  }
}
console.log(tasks[0])
console.log(tasks[1])
