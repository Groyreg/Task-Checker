
var htmlCodeForViewer = "<tr><td class='table-text'></td><td class='table-text'>Name</td><td class='table-buttons'><button class='btn btn-primary' type='submit'>yes</button><button class='btn btn-primary' type='submit'>no</button></td></tr>",
    htmlCodeForProgressMobile = "<tr><td class='table-text table-progress'>$</td></tr>",
    htmlCodeForProgressDesktop = "<tr><td class='table-text table-progress'>$</td><td class='table-text table-progress'>Name</td></tr>",
    htmlCodeProgressBarForMobile = "<div class='progress-check col-xs-10'><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'>45 %</div></div></div>",
    htmlCodeProgressBarForDesktop ="<div class='progress-check col-sm-6'><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'>45 %</div></div></div>",
    tableViewerMobile = document.getElementById ("task-table-mobile"),
    tableViewerDesktop = document.getElementById ("task-table-desktop"),
    tableProgressMobile = document.getElementById ("task-table-progress-mobile"),
    tableProgressDesktop = document.getElementById ("task-table-progress-desktop"),
    addTaskMobile = document.getElementById ("add-task-mobile"),
    addTaskDesktop = document.getElementById ("add-task-desktop"),
    progressBarMobile = document.getElementById ("progress-bar-mobile"),
    progressBarDesktop = document.getElementById ("progress-bar-desktop");

function addNewTask() {
  tableViewerMobile.insertAdjacentHTML('beforeEnd', htmlCodeForViewer);
  tableViewerDesktop.insertAdjacentHTML('beforeEnd', htmlCodeForViewer);
  tableProgressMobile.insertAdjacentHTML('beforeEnd', htmlCodeForProgressMobile);
  tableProgressDesktop.insertAdjacentHTML('beforeEnd', htmlCodeForProgressDesktop);
  progressBarMobile.insertAdjacentHTML('beforeEnd', htmlCodeProgressBarForMobile);
  progressBarDesktop.insertAdjacentHTML('beforeEnd', htmlCodeProgressBarForDesktop);
}

addTaskMobile.onclick = addNewTask;
addTaskDesktop.onclick = addNewTask;

