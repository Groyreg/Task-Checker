$(document).ready(function(){
	var habbitList = $('.habbit-tbl-list ol'),
    	hlMask = 'hl__';

	$('.habbit-add input').on('keydown',function(e){
      if(e.keyCode != 13)
        return;
      var habbitVal = e.target.value;
      e.target.value = "";
      if(habbitVal.length > 0){
        var habbitId = 0;
        hlList.children().each(function(index, el){
          var jelId = $(el).attr('data-itemid').slice(4);
          if(jelId > habbitId)
            habbitId = jelId;
        });
        habbitId++;
        localStorage.setItem(hlMask+habbitId,habbitVal);
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', hlMask+habbitId)
          .text(str).appendTo(habbitList);
      };
});