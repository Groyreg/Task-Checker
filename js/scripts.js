
var htmlCodeForViewer = "<tr><td class='table-text'></td><td class='table-text' contenteditable='true'>Name</td><td class='table-buttons'><button class='btn-circle-new btn-yes-new btn-y-m' type='submit'><i class='fa fa-check-circle fa-3x' aria-hidden='true'></i></button><button class='btn-circle-new' type='submit'><i class='fa fa-times-circle fa-3x' aria-hidden='true'></i></button></td></tr>",
    htmlCodeForProgressMobile = "<tr><td class='table-text table-progress'></td></tr>",
    htmlCodeForProgressDesktop = "<tr><td class='table-text table-progress'></td><td class='table-text table-progress' contenteditable='true'>Name</td><td class='table-buttons'><button class='btn-circle-new btn-yes-new' type='submit'><i class='fa fa-check-circle fa-3x' aria-hidden='true'></i></button><button class='btn-circle-new' type='submit'><i class='fa fa-times-circle fa-3x' aria-hidden='true'></i></button></td></tr>",
    htmlCodeProgressBarForMobile = "<div class='progress'><div class='progress-bar progress-bar-striped active pgb-m' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'>45 %</div></div>",
    htmlCodeProgressBarForDesktop ="<div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'>45 %</div></div>",
    tableViewerMobile = document.getElementById ("task-table-mobile"),
    tableProgressMobile = document.getElementById ("task-table-progress-mobile"),
    tableProgressDesktop = document.getElementById ("task-table-progress-desktop"),
    addTaskMobile = document.getElementById ("add-task-mobile"),
    addTaskDesktop = document.getElementById ("add-task-desktop"),
    progressBarMobile = document.getElementById ("progress-bar-mobile"),
    progressBarDesktop = document.getElementById ("progress-bar-desktop"),
    checkProgressYes = document.getElementById ("progress-bar-desktop"),
    checkProgressNo = document.getElementById ("progress-bar-desktop"),
    allButtonYesMobile = document.getElementsByClassName ("btn-y-m"),
    allButtonNoMobile = document.getElementsByClassName ("btn-n-m"),
    allProgressBarsMobile = document.getElementsByClassName ("pgb-m");

// Нумерация верхней таблицы mobile
$('.tbl-first-mobile tbody tr').each(function(i) {
      var numberMob = i++;
  $(this).find('td:first').text(numberMob);
  });

// Нумерация верхней таблицы desktop
$('.tbl-first-desktop tbody tr').each(function(j) {
      var numberDes = j++;
  $(this).find('td:first').text(numberDes);
  });

// Нумерация нижней таблицы mobile
$('.tbl-second-mobile tbody tr').each(function(k) {
      var number2Mob = k++;
  $(this).find('td:first').text(number2Mob);
  });

// Нумерация нижней таблицы desktop
$('.tbl-second-desktop tbody tr').each(function(l) {
      var number2Des = l++;
  $(this).find('td:first').text(number2Des);
  });


function addNewTask() {
  
// Добавление новых строк таблиц для mobile и desktop
  tableViewerMobile.insertAdjacentHTML('beforeEnd', htmlCodeForViewer);
  tableProgressMobile.insertAdjacentHTML('beforeEnd', htmlCodeForProgressMobile);
  tableProgressDesktop.insertAdjacentHTML('beforeEnd', htmlCodeForProgressDesktop);
  progressBarMobile.insertAdjacentHTML('beforeEnd', htmlCodeProgressBarForMobile);
  progressBarDesktop.insertAdjacentHTML('beforeEnd', htmlCodeProgressBarForDesktop);
  
// Нумерация для новых строк верхней таблицы mobile
  $('.tbl-first-mobile tbody tr').each(function(i) {
      var numberMob = i++;
  $(this).find('td:first').text(numberMob);
  });

// Нумерация для новых строк верхней таблицы desktop
  $('.tbl-first-desktop tbody tr').each(function(j) {
      var numberDes = j++;
  $(this).find('td:first').text(numberDes);
  });

// Нумерация для новых строк нижней таблицы mobile
  $('.tbl-second-mobile tbody tr').each(function(k) {
      var number2Mob = k++;
  $(this).find('td:first').text(number2Mob);
  });

// Нумерация для новых строк нижней таблицы desktop
  $('.tbl-second-desktop tbody tr').each(function(l) {
      var number2Des = l++;
  $(this).find('td:first').text(number2Des);
  });

  console.log(allButtonYesMobile);
  console.log(allProgressBarsMobile);
}
 
// Вызов функций по нажатию на заданные кнопки
addTaskMobile.onclick = addNewTask;
addTaskDesktop.onclick = addNewTask;

