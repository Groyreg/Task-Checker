
var htmlCodeForViewer = "<tr><td class='table-text'></td><td class='table-text' contenteditable='true'>Name</td><td class='table-buttons'><button class='btn-circle-new' type='submit'><i class='fa fa-check-circle fa-3x' aria-hidden='true'></i></button><button class='btn-circle-new' type='submit'><i class='fa fa-times-circle fa-3x' aria-hidden='true'></i></button></td></tr>",
    htmlCodeForProgressMobile = "<tr><td class='table-text table-progress'></td></tr>",
    htmlCodeForProgressDesktop = "<tr><td class='table-text table-progress'></td><td class='table-text table-progress' contenteditable='true'>Name</td><td class='table-buttons'><button class='btn-circle-new btn-yes-new' type='submit'><i class='fa fa-check-circle fa-3x' aria-hidden='true'></i></button><button class='btn-circle-new' type='submit'><i class='fa fa-times-circle fa-3x' aria-hidden='true'></i></button></td></tr>",
    htmlCodeProgressBarForMobile = "<div class='progress-check col-xs-10'><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'>45 %</div></div></div>",
    htmlCodeProgressBarForDesktop ="<div class='progress-check col-sm-6'><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'>45 %</div></div></div>",
    tableViewerMobile = document.getElementById ("task-table-mobile"),
    tableProgressMobile = document.getElementById ("task-table-progress-mobile"),
    tableProgressDesktop = document.getElementById ("task-table-progress-desktop"),
    addTaskMobile = document.getElementById ("add-task-mobile"),
    addTaskDesktop = document.getElementById ("add-task-desktop"),
    progressBarMobile = document.getElementById ("progress-bar-mobile"),
    progressBarDesktop = document.getElementById ("progress-bar-desktop");
 
$('.tbl-first-mobile tbody tr').each(function(i) {
      var numberMob = i++;
  $(this).find('td:first').text(numberMob);
  });
$('.tbl-first-desktop tbody tr').each(function(j) {
      var numberDes = j++;
  $(this).find('td:first').text(numberDes);
  });
$('.tbl-second-mobile tbody tr').each(function(k) {
      var number2Mob = k++;
  $(this).find('td:first').text(number2Mob);
  });
$('.tbl-second-desktop tbody tr').each(function(l) {
      var number2Des = l++;
  $(this).find('td:first').text(number2Des);
  });


function addNewTask() {
  tableViewerMobile.insertAdjacentHTML('beforeEnd', htmlCodeForViewer);
  tableProgressMobile.insertAdjacentHTML('beforeEnd', htmlCodeForProgressMobile);
  tableProgressDesktop.insertAdjacentHTML('beforeEnd', htmlCodeForProgressDesktop);
  progressBarMobile.insertAdjacentHTML('beforeEnd', htmlCodeProgressBarForMobile);
  progressBarDesktop.insertAdjacentHTML('beforeEnd', htmlCodeProgressBarForDesktop);
  
  $('.tbl-first-mobile tbody tr').each(function(i) {
      var numberMob = i++;
  $(this).find('td:first').text(numberMob);
  });
$('.tbl-first-desktop tbody tr').each(function(j) {
      var numberDes = j++;
  $(this).find('td:first').text(numberDes);
  });
$('.tbl-second-mobile tbody tr').each(function(k) {
      var number2Mob = k++;
  $(this).find('td:first').text(number2Mob);
  });
$('.tbl-second-desktop tbody tr').each(function(l) {
      var number2Des = l++;
  $(this).find('td:first').text(number2Des);
  });
}
 
addTaskMobile.onclick = addNewTask;
addTaskDesktop.onclick = addNewTask;


