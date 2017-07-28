
var htmlCode = "<tr><td>$</td><td>Name</td><td><button>yes</button><button>no</button></td></tr>";
var table = document.getElementById ("task-table");
var addTask = document.getElementById ("add-task");


function Test() {
  table.insertAdjacentHTML('beforeEnd', htmlCode);
}


addTask.onclick = Test;

