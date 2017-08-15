$(document).ready(function(){
  var habbitList = $(".habbit-tbl-list ol"),
      habbitMask = "hlm_",
      pgrMask = "pgr_",
      pgrMaskMob = "pgrm_",
      pgrAttr = 1,
      // pgrLS = $(".progress-check-mob > ol").html(),
      // pgrLSMob = document.getElementsByClassName("progress-check-mob").innerHTML,
      btn = "<div class='habbit-tbl-btn container col-xs-4'>"+
            "<button class='btn-circle btn-yes' type='submit'><i class='fa fa-check-circle fa-3x' aria-hidden='true'></i></button>"+
            "<button class='btn-circle btn-no' type='submit'><i class='fa fa-times-circle fa-3x' aria-hidden='true'></i></button></div>",
      pgrBar = "<div class='wrapper'><div class='progress'><div class='progress-bar progress-bar-striped active pgrb-d'"+
               " role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%'>0</div></div></div>",
      pgrBarMob = "<li><div class='wrapper-mob'><div class='progress'><div class='progress-bar progress-bar-striped active pgrb-m'"+
                  " role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%'>0 %</div></div></div></li>",
      btnAllId,
      btnYesId,
      btnNoId,
      pgrWrapperId,
      pgrWrapperMobId,
      pgrBarId,
      pgrBarMobId;
 
  // анимация баннера аннтоации 
  // $(".annotation").hide();
  // $(".annotation").slideDown(3000);

  // добавление data-itemId выбранным элементам
  function addAttrBtnAll(){
    $('.tbl-bottom .habbit-tbl-btn').each(function (btnAllId){
        $(this).attr("data-itemid", parseInt(1) + btnAllId++);
    });
  };
  function addAttrBtnYes(){
    $('.tbl-bottom .habbit-tbl-btn .btn-yes:first-child').each(function (btnYesId){ 
        $(this).attr("data-itemid", btnYesId++);
    });
  };
  function addAttrBtnNo(){
    $('.tbl-bottom .habbit-tbl-btn .btn-no:nth-child(2)').each(function (btnNoId){ 
        $(this).attr("data-itemid", btnNoId++);
    });
  };
  function addAttrPgrBar(){
    $('.progress-check .wrapper .progress .progress-bar:first-child').each(function (pgrBarId){ 
        $(this).attr("data-itemid", pgrMask + pgrBarId++);
    });
  };
  function addAttrPgrBarMob(){
    $('.progress-check-mob .wrapper-mob .progress .progress-bar:first-child').each(function (pgrBarMobId){ 
        $(this).attr("data-itemid", pgrMaskMob + pgrBarMobId++);
    });
  };
  // возвращение данных из localstorage
  function showHabbits(){
    var lsLen = localStorage.length;

    if(lsLen > 0){
      for(var i = 0; i < lsLen; i++){
        var key = localStorage.key(i);
          if(key.indexOf(habbitMask) == 0){
          $("<li></li>").attr("data-itemid", key)
                        .text(localStorage.getItem(key))
                        .appendTo(habbitList);
          $(".tbl-bottom").append(btn);
          addAttrBtnAll();
          addAttrBtnYes();
          addAttrBtnNo();
          $(".progress-check").html(localStorage.getItem("pgrLS"));
          // addAttrPgrBar();
          $(".progress-check-mob ol").html(localStorage.getItem('pgrLSMob'));
          // addAttrPgrBarMob();
        }
      }
    }
  }

  showHabbits();
  // обработчик input с помощью клавиши enter
  $(".habbit-add input").on("keydown", function(e){
    if(e.keyCode != 13)
      return;
    var habbitVal = e.target.value;
    e.target.value = "";
    // сохранение элементов li в localstorage
    if(habbitVal.length > 0){
      var habbitId = 0;

      habbitList.children().each(function(index, el){
          var jelId = $(el).attr("data-itemid").slice(4);
          if(jelId > habbitId)
            habbitId = jelId;
      });
      
      habbitId++;
      localStorage.setItem(habbitMask + habbitId, habbitVal);

      // добавление элементов на стр
      $("<li></li>").addClass('habbitListBtn')
                    .attr("data-itemid", habbitMask + habbitId)
                    .text(habbitVal)
                    .appendTo(habbitList);
      $(".tbl-bottom").append(btn);
      addAttrBtnAll();
      addAttrBtnYes();
      addAttrBtnNo();
      $(".progress-check").append(pgrBar);
      addAttrPgrBar();
      $(".progress-check-mob ol").append(pgrBarMob);
      addAttrPgrBarMob();
    };
  });

  // удаление элементов со стр и localstorage
  $(document).on("click","li", function(e){
      var habbitDel = $(e.target),
          btnDel = $(".habbit-tbl-btn[data-itemid='"+ habbitDel.attr("data-itemid").slice(4) +"' "),
          pgrBarDel = $(".wrapper[data-itemid='"+ habbitDel.attr("data-itemid").slice(4) +"' "),
          pgrBarMobDel = $(".progress-check-mob ol li[data-itemid='"+ habbitDel.attr("data-itemid").slice(4) +"' ");
      localStorage.removeItem(habbitDel.attr("data-itemid"));
      habbitDel.remove();
      btnDel.remove();
      pgrBarDel.remove();
      pgrBarMobDel.remove();
    });

  // динамическая шкала прогресса desktop
  $(document).on("click", ".btn-yes", function(){
    var clickedBtn = $(this).attr("data-itemid"),
        choosenBar = $(".progress-bar[data-itemid='"+ pgrMask + clickedBtn +"' ");

    if((choosenBar).attr("aria-valuenow") < 100){
      $(choosenBar).attr("aria-valuenow", parseInt($(choosenBar).attr("aria-valuenow")) + parseInt(1))
                   .width(parseInt($(choosenBar).attr("style").slice(7)) + parseInt(1) + "%")
                   .text(parseInt($(choosenBar).text()) + parseInt(1) + "%");
    } else if((choosenBar).attr("aria-valuenow") >= 100){
      alert("Cool! You could do it!");
    }
    // localStorage.setItem("pgrLS", pgrLS);
    // localStorage.setItem("pgrLSMob", pgrLSMob);
  });
  $(document).on("click", ".btn-no", function(){
    var clickedBtn = $(this).attr("data-itemid"),
        choosenBar = $(".progress-bar[data-itemid='"+ pgrMask + clickedBtn +"' ");

    $(choosenBar).attr("aria-valuenow", 0)
                 .width(0 + "%")
                 .text(0 + "%");
    alert("Sorry..You have to start it again.. :(");
    // localStorage.setItem("pgrLS", pgrLS);
    // localStorage.setItem("pgrLSMob", pgrLSMob);
  });
  // динамическая шкала прогресса mobile
  $(document).on("click", ".btn-yes", function(){
    var clickedBtn = $(this).attr("data-itemid"),
        choosenBar = $(".progress-bar[data-itemid='"+ pgrMaskMob + clickedBtn +"' ");

    if((choosenBar).attr("aria-valuenow") < 100){
      $(choosenBar).attr("aria-valuenow", parseInt($(choosenBar).attr("aria-valuenow")) + parseInt(1))
                   .width(parseInt($(choosenBar).attr("style").slice(7)) + parseInt(1) + "%")
                   .text(parseInt($(choosenBar).text()) + parseInt(1) + "%");
    } 
    // alert(pgrLSMob);
    // localStorage.setItem("pgrLS", pgrLS);
    // localStorage.setItem("pgrLSMob", pgrLSMob);
  });
  $(document).on("click", ".btn-no", function(){
    var clickedBtn = $(this).attr("data-itemid"),
        choosenBar = $(".progress-bar[data-itemid='"+ pgrMaskMob + clickedBtn +"' ");

    $(choosenBar).attr("aria-valuenow", 0)
                 .width(0 + "%")
                 .text(0 + "%");
    // localStorage.setItem("pgrLS", pgrLS);
    // localStorage.setItem("pgrLSMob", pgrLSMob);
  });
});