$(document).ready(function(){
  var habbitList = $(".habbit-tbl-list ol"),
      habbitMask = "hlm_",
      btnId = 0,
      pgrAttr = 1,
      btn = "<div class='habbit-tbl-btn container col-xs-4'>"+
            "<button class='btn-circle btn-yes' data-itemid='"+ btnId +"' type='submit'><i class='fa fa-check-circle fa-3x' aria-hidden='true'></i></button>"+
            "<button class='btn-circle btn-no' type='submit'><i class='fa fa-times-circle fa-3x' aria-hidden='true'></i></button></div>",
      pgrBar = "<div class='wrapper'><div class='progress'><div class='progress-bar progress-bar-striped active pgrb-d'"+
               " role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%'> 0 %</div></div></div>",
      pgrBarMob = "<li><div class='wrapper-mob'><div class='progress'><div class='progress-bar progress-bar-striped active pgrb-m'"+
                  " role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%'>0 %</div></div></div></li>";
      

  $(".annotation").hide();
  $(".annotation").slideDown(3000);

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
          $(".progress-check").append(pgrBar);
          $(".progress-check-mob ol").append(pgrBarMob);
        }
      }
    }
  }

  showHabbits();

  $(".habbit-add input").on("keydown", function(e){
    if(e.keyCode != 13)
      return;
    var habbitVal = e.target.value;
    e.target.value = "";

    if(habbitVal.length > 0){
      var habbitId = 0,
          
          pgrMobId = 0;
      habbitList.children().each(function(index, el){
          var jelId = $(el).attr('data-itemid').slice(4);
          if(jelId > habbitId)
            habbitId = jelId;
      })
      habbitId++;
      localStorage.setItem(habbitMask+habbitId, habbitVal);


      $("<li></li>").addClass('habbitListBtn')
                    .attr("data-itemid", habbitMask+habbitId)
                    .text(habbitVal)
                    .appendTo(habbitList);
      $(".tbl-bottom").append(btn);
      $(".progress-check").append(pgrBar);
      $(".progress-check-mob ol").append(pgrBarMob);
    }
  });
  $(document).on("click","li", function(e){
      var habbitDel = $(e.target);
      localStorage.removeItem(habbitDel.attr("data-itemid"));
      habbitDel.remove();
      $(this).remove();
    })
  $(document).on("click", ".btn-yes", function(){
    $(".progress-bar").attr("aria-valuenow", pgrAttr)
          .attr("style", "width: " + pgrAttr + "%")
          .text(pgrAttr + "%");
    pgrAttr++;
  })
});