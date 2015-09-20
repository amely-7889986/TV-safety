// search
$(function(){
  $("#searchSelected").click(function(){
    $("#searchTab").show();
    $(this).addClass("searchOpen");
  });

  $("#searchTab li").hover(function(){
    $(this).addClass("selected");
  },function(){
    $(this).removeClass("selected");
  });

  $("#searchTab li").click(function(){
    $("#searchSelected").html($(this).html());
    $("#searchTab").hide();
    $("#searchSelected").removeClass("searchOpen");
  });
});
// banner
$(function() {
        $('#banner').marquee({
            auto: true,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#u-next'),
            nextElement: $('#u-prev')
        });
    });
$(function() {
        $('#video-marquee').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 4,
            stepLen: 1,
            prevElement: $('#video-next'),
            nextElement: $('#video-prev')
        });
    });
// marquee
$(function() {
    $('#shopping-marquee').marquee({
      auto: false,
      interval: 5000,
      speed: 500,
      showNum: 3,
      stepLen: 1,
      type: 'vertical',
      prevElement: $('#shopping-next'),
      nextElement: $('#shopping-prev')
    });
  });
// tab
$(function() {
  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd-h", "active", ".tab-bd-h");
});


$(function(){

  $('.video-list-img ul li').hover(function(){
    $(this).children('.box').stop(true,true).delay(100).animate({'bottom':0,opacity:1},300);
  },function(){
    $(this).children('.box').stop(true,true).animate({'bottom':-112,opacity:0},200);
  })
})
$(function(){

  $('.bottom-video-img ul li').hover(function(){
    $(this).children('.box').stop(true,true).delay(100).animate({'bottom':0,opacity:1},300);
  },function(){
    $(this).children('.box').stop(true,true).animate({'bottom':-68},200);
  })
})
